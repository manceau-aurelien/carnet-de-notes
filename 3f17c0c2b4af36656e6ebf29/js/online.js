"use strict";
// =====================================================================
//  BRICKS — en ligne : compte, sauvegarde synchronisée, amis, messages
//  Service : Supabase (la clé ci-dessous est publique par conception ;
//  la sécurité est assurée par les règles RLS de la base).
// =====================================================================
const CLOUD_URL = "https://dsessjeacvlsoncnlwmh.supabase.co";
const CLOUD_KEY = "sb_publishable_0q7q7nRw21calnx_Pi9Stw_09yQQ7TH";
const HAS_CLOUD = !window.BRICKS_TEST && !!(window.supabase && window.supabase.createClient);

const Online = {
  sb: null, pid: null, user: null, me: null, channel: null,
  friends: [], requestsIn: [], requestsOut: [], blocked: [], unread: {},
  lastPull: 0, lastPushSig: "", pushTimer: null, pollTimer: null, relTimer: null, busy: false,
};
let FV = null;              // état de la fenêtre « Amis » : { view, other }
const CLIENTS = {};         // un client par profil local (chacun garde sa propre session)

function clientFor(pid) {
  if (!HAS_CLOUD) return null;
  if (!CLIENTS[pid]) {
    CLIENTS[pid] = window.supabase.createClient(CLOUD_URL, CLOUD_KEY, {
      auth: { storageKey: "bricks-sb-" + pid, persistSession: true, autoRefreshToken: true, detectSessionInUrl: false, flowType: "implicit" },
    });
  }
  return CLIENTS[pid];
}
const linked = () => !!(P && P.cloud);
const connected = () => !!(Online.user && P && P.cloud && Online.pid === P.id);

// ---------- Textes (fr / en-US) ----------
Object.assign(STR.fr, {
  friends: "Amis", friendsTip: "Amis & messages",
  onlinePitch: "Joue avec tes amis : ajoute-les par leur <b>pseudo</b>, suis leur progression et écrivez-vous.<br><br>Ton compte en ligne <b>sauvegarde aussi ta progression</b> : retrouve-la sur ton téléphone et ton ordinateur.",
  createAccount: "Créer mon compte en ligne", haveAccount: "J'ai déjà un compte",
  offline: "Impossible de joindre le serveur. Vérifie ta connexion internet puis réessaie.",
  sessionExpired: "Ta session a expiré : reconnecte-toi pour retrouver tes amis.",
  username: "Pseudo (visible par tes amis)", email: "E-mail", password: "Mot de passe (6 caractères min.)",
  passwordLogin: "Mot de passe", showPassword: "Afficher le mot de passe",
  signupNote: "Retiens bien ton e-mail et ton mot de passe : ils te serviront à te connecter sur tes autres appareils.",
  loginNote: "Si ce profil a déjà de la progression, elle sera fusionnée avec celle du compte : pour chaque parcours, la plus avancée est gardée.",
  createBtn: "Créer le compte", loginBtn: "Se connecter", forgot: "Mot de passe oublié ?",
  errUsername: "Le pseudo doit faire de 3 à 20 caractères (sans @, < ou >).",
  errUsernameTaken: "Ce pseudo est déjà pris.", errEmail: "Entre une adresse e-mail valide.",
  errPassword: "Le mot de passe doit faire au moins 6 caractères.", errCredentials: "E-mail ou mot de passe incorrect.",
  errExists: "Cet e-mail a déjà un compte : utilise « J'ai déjà un compte ».", errRate: "Trop de tentatives, réessaie dans quelques minutes.",
  errGeneric: "Une erreur est survenue. Réessaie.", errAlreadyLinked: (n) => `Ce compte est déjà relié au profil « ${n} » sur cet appareil.`,
  checkEmail: "Compte créé ! Ouvre l'e-mail de confirmation reçu, puis reviens te connecter.",
  resetSent: "Si un compte existe pour cet e-mail, un lien pour changer le mot de passe vient d'être envoyé.",
  emailFirst: "Entre d'abord ton e-mail ci-dessus.",
  newPassword: "Choisis un nouveau mot de passe", newPasswordBtn: "Enregistrer le mot de passe",
  passwordChanged: "Mot de passe changé ✔ Tu peux te connecter.", emailConfirmed: "E-mail confirmé ✔ Tu peux te connecter.",
  linkedOk: (u) => `☁️ Connecté en tant que <b>${u}</b> — ta progression est sauvegardée en ligne.`,
  syncedFrom: "☁️ Progression synchronisée depuis ton autre appareil.",
  yourName: "Ton pseudo", shareName: "Donne-le à tes amis pour qu'ils t'ajoutent.",
  cloudOn: "☁️ Sauvegarde en ligne active", logout: "Se déconnecter", deleteAccount: "Supprimer mon compte en ligne",
  addFriend: "Ajouter un ami", addPh: "Pseudo de ton ami", addBtn: "Ajouter",
  reqIn: "Demandes reçues", reqOut: "Demandes envoyées", friendsList: "Mes amis", blockedList: "Joueurs bloqués",
  accept: "Accepter", decline: "Refuser", cancelReq: "Annuler", unblock: "Débloquer", pending: "en attente",
  noFriends: "Pas encore d'amis. Donne ton pseudo à tes amis, ou ajoute le leur ci-dessus !",
  r_sent: "✔ Demande envoyée !", r_accepted: "🎉 Vous êtes maintenant amis !", r_already_friends: "Vous êtes déjà amis.",
  r_already_sent: "Demande déjà envoyée, en attente de réponse.", r_not_found: "Aucun joueur avec ce pseudo.",
  r_self: "C'est ton propre pseudo 😉", r_you_blocked: "Tu as bloqué ce joueur. Débloque-le d'abord.",
  newRequest: (u) => `👋 <b>${u}</b> veut être ton ami !`,
  lastSession: (d) => `Dernière session : ${d}`, seen: (d) => `Vu ${d}`,
  ago: (d) => `il y a ${d}`, justNow: "à l'instant", never: "jamais",
  noProgress: "Pas encore de progression.", notStartedPath: "pas commencé",
  chatPh: "Écris un message…", send: "Envoyer", noMessages: "Aucun message. Dis bonjour 👋",
  removeFriend: "Retirer de mes amis", block: "Bloquer",
  confirmRemove: (u) => `Retirer ${u} de tes amis ?`, confirmBlock: (u) => `Bloquer ${u} ? Vous ne pourrez plus vous voir ni vous écrire.`,
  msgRate: "Doucement ! Attends un peu avant d'envoyer d'autres messages.", msgFail: "Message non envoyé. Réessaie.",
  deleteAccTitle: "ATTENTION : TON COMPTE EN LIGNE VA ÊTRE SUPPRIMÉ",
  deleteAccIntro: "Cette action est <b>définitive et irréversible</b>. Seront supprimés :",
  deleteAccItems: (u) => [`☁️ ton compte <b>${u}</b> et ta sauvegarde en ligne`, "👥 tous tes amis et demandes d'ami", "💬 tous tes messages"],
  deleteAccOutro: "Ta progression reste sur cet appareil, dans ce profil.",
  cloudKept: "Ton compte en ligne n'est pas supprimé : tu pourras le retrouver avec « J'ai déjà un compte ».",
  restoreTitle: "Retrouver mon compte en ligne", restoreCard: "J'ai déjà un compte en ligne",
  back2: "← Retour",
});
Object.assign(STR.en, {
  friends: "Friends", friendsTip: "Friends & messages",
  onlinePitch: "Play with your friends: add them by <b>username</b>, follow their progress and message each other.<br><br>Your online account also <b>backs up your progress</b>: pick it up on your phone and your computer.",
  createAccount: "Create my online account", haveAccount: "I already have an account",
  offline: "Can't reach the server. Check your internet connection and try again.",
  sessionExpired: "Your session expired: sign in again to see your friends.",
  username: "Username (visible to your friends)", email: "Email", password: "Password (6 characters min.)",
  passwordLogin: "Password", showPassword: "Show password",
  signupNote: "Remember your email and password: you'll use them to sign in on your other devices.",
  loginNote: "If this profile already has progress, it will be merged with the account's: for each path, the most advanced one is kept.",
  createBtn: "Create account", loginBtn: "Sign in", forgot: "Forgot your password?",
  errUsername: "Your username must be 3 to 20 characters (no @, < or >).",
  errUsernameTaken: "That username is already taken.", errEmail: "Enter a valid email address.",
  errPassword: "Your password must be at least 6 characters.", errCredentials: "Wrong email or password.",
  errExists: "This email already has an account: use “I already have an account”.", errRate: "Too many attempts, try again in a few minutes.",
  errGeneric: "Something went wrong. Please try again.", errAlreadyLinked: (n) => `This account is already linked to the “${n}” profile on this device.`,
  checkEmail: "Account created! Open the confirmation email you received, then come back and sign in.",
  resetSent: "If an account exists for this email, a link to reset your password has just been sent.",
  emailFirst: "Enter your email above first.",
  newPassword: "Choose a new password", newPasswordBtn: "Save password",
  passwordChanged: "Password changed ✔ You can sign in now.", emailConfirmed: "Email confirmed ✔ You can sign in now.",
  linkedOk: (u) => `☁️ Signed in as <b>${u}</b> — your progress is backed up online.`,
  syncedFrom: "☁️ Progress synced from your other device.",
  yourName: "Your username", shareName: "Share it with your friends so they can add you.",
  cloudOn: "☁️ Online backup on", logout: "Sign out", deleteAccount: "Delete my online account",
  addFriend: "Add a friend", addPh: "Your friend's username", addBtn: "Add",
  reqIn: "Friend requests", reqOut: "Sent requests", friendsList: "My friends", blockedList: "Blocked players",
  accept: "Accept", decline: "Decline", cancelReq: "Cancel", unblock: "Unblock", pending: "pending",
  noFriends: "No friends yet. Share your username, or add theirs above!",
  r_sent: "✔ Request sent!", r_accepted: "🎉 You're now friends!", r_already_friends: "You're already friends.",
  r_already_sent: "Request already sent, waiting for an answer.", r_not_found: "No player with that username.",
  r_self: "That's your own username 😉", r_you_blocked: "You blocked this player. Unblock them first.",
  newRequest: (u) => `👋 <b>${u}</b> wants to be your friend!`,
  lastSession: (d) => `Last session: ${d}`, seen: (d) => `Seen ${d}`,
  ago: (d) => `${d} ago`, justNow: "just now", never: "never",
  noProgress: "No progress yet.", notStartedPath: "not started",
  chatPh: "Write a message…", send: "Send", noMessages: "No messages yet. Say hi 👋",
  removeFriend: "Remove friend", block: "Block",
  confirmRemove: (u) => `Remove ${u} from your friends?`, confirmBlock: (u) => `Block ${u}? You won't be able to see or message each other anymore.`,
  msgRate: "Slow down! Wait a bit before sending more messages.", msgFail: "Message not sent. Please try again.",
  deleteAccTitle: "WARNING: YOUR ONLINE ACCOUNT WILL BE DELETED",
  deleteAccIntro: "This action is <b>permanent and cannot be undone</b>. This will be deleted:",
  deleteAccItems: (u) => [`☁️ your account <b>${u}</b> and your online backup`, "👥 all your friends and friend requests", "💬 all your messages"],
  deleteAccOutro: "Your progress stays on this device, in this profile.",
  cloudKept: "Your online account is not deleted: you can get it back with “I already have an account”.",
  restoreTitle: "Get my online account back", restoreCard: "I already have an online account",
  back2: "← Back",
});

// ---------- Utilitaires ----------
function fmtAgo(ts, lang = UI) {
  if (!ts) return tr(lang, "never");
  const d = Date.now() - new Date(ts).getTime();
  return d < 3 * MIN ? tr(lang, "justNow") : tr(lang, "ago", fmtDur(d, lang));
}
function streakAlive(last) {
  if (!last) return false;
  const t = new Date().toDateString(), y = new Date(Date.now() - DAY).toDateString();
  return last === t || last === y;
}
function authError(err, lang = UI) {
  const c = (err && (err.code || "")) + " " + ((err && err.message) || "");
  if (/invalid_credentials|Invalid login/i.test(c)) return tr(lang, "errCredentials");
  if (/user_already_exists|already registered/i.test(c)) return tr(lang, "errExists");
  if (/weak_password|at least 6/i.test(c)) return tr(lang, "errPassword");
  if (/rate|too many/i.test(c)) return tr(lang, "errRate");
  if (/email_address_invalid|invalid format|validate email/i.test(c)) return tr(lang, "errEmail");
  if (/fetch|network|Failed/i.test(c)) return tr(lang, "offline");
  return tr(lang, "errGeneric");
}
const validUsername = (u) => u.length >= 3 && u.length <= 20 && !/[@<>\u0000-\u001f]/.test(u);
const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

// =====================================================================
//  CONNEXION D'UN PROFIL LOCAL À SON COMPTE EN LIGNE
// =====================================================================
function onlineDetach() {
  if (Online.sb) {
    try { Online.sb.removeAllChannels(); Online.sb.auth.stopAutoRefresh(); } catch (e) { /* */ }
  }
  clearInterval(Online.pollTimer); clearTimeout(Online.pushTimer); clearTimeout(Online.relTimer);
  Object.assign(Online, { sb: null, pid: null, user: null, me: null, channel: null, friends: [], requestsIn: [], requestsOut: [], blocked: [], unread: {}, lastPushSig: "" });
  updateFriendsBadge();
}

async function onlineAttach() {
  onlineDetach();
  if (!linked() || !HAS_CLOUD) return;
  const pid = P.id, sb = clientFor(pid);
  Online.sb = sb; Online.pid = pid;
  try {
    sb.auth.startAutoRefresh();
    const { data } = await sb.auth.getSession();
    if (Online.pid !== pid) return;
    const session = data && data.session;
    if (!session || session.user.id !== P.cloud.userId) { P.cloud.expired = true; updateFriendsBadge(); return; }
    delete P.cloud.expired;
    Online.user = session.user;
    sb.auth.onAuthStateChange((ev) => {
      if (ev === "SIGNED_OUT" && Online.pid === pid && P && P.cloud) { P.cloud.expired = true; Online.user = null; updateFriendsBadge(); }
    });
    await pullAndMerge();
    await loadSocial();
    subscribeRealtime();
    pushSave(true);
    Online.pollTimer = setInterval(() => { if (connected()) loadSocial(); }, 90 * 1000);
  } catch (e) { /* hors ligne : on réessaiera au prochain retour sur l'onglet */ }
}

// ---------- Sauvegarde en ligne ----------
function cloudPayload(p) { return { v: 2, avatar: p.avatar, settings: p.settings, lastPath: p.lastPath, paths: p.paths }; }
function pushSig(p) {
  return p.avatar + JSON.stringify(p.paths, (k, v) => (k === "savoir" || k === "earned" || k === "lastTick" ? undefined : v));
}
function progressSummary(p) {
  const out = {};
  for (const k in p.paths) {
    const st = p.paths[k], c = COURSES[k];
    if (!c) continue;
    let attrs = 0, starsTot = 0;
    for (const id in st.bricks) for (const aid in st.bricks[id].attrs) {
      const a = st.bricks[id].attrs[aid]; if (a.learned) { attrs++; starsTot += stars(a); }
    }
    out[k] = {
      xp: st.xp, rank: rankInfo(st, c).i, savoir: Math.floor(st.savoir), streak: st.streak.days, streakLast: st.streak.last,
      bricks: Object.keys(st.bricks).length, attrs, stars: starsTot, skills: Object.keys(st.skills).length,
      active: st.lastActive || null, started: !!st.started,
      boss: st.boss && st.boss.unlocked ? { hp: st.boss.hp, defeated: !!st.boss.defeated } : null,
      boss2: st.boss2 && st.boss2.unlocked ? { hp: st.boss2.hp, defeated: !!st.boss2.defeated } : null,
    };
  }
  return out;
}
async function pushSave(force = false) {
  if (!connected()) return;
  const p = P, sb = Online.sb, uid = Online.user.id, sig = pushSig(p);
  if (!force && sig === Online.lastPushSig) return;
  Online.lastPushSig = sig;
  const now = new Date().toISOString();
  try {
    const r = await sb.from("saves").upsert({ user_id: uid, data: cloudPayload(p), updated_at: now });
    if (r.error) throw r.error;
    await sb.from("progress").upsert({ user_id: uid, data: progressSummary(p), updated_at: now });
    await sb.from("profiles").update({ last_seen: now, avatar: p.avatar }).eq("id", uid);
  } catch (e) { Online.lastPushSig = ""; }
}
// Appelée à chaque sauvegarde locale : envoi groupé quelques secondes plus tard
function scheduleCloudSync() {
  if (!connected()) return;
  clearTimeout(Online.pushTimer);
  Online.pushTimer = setTimeout(() => pushSave(), 4000);
}

// Fusion : pour chaque parcours, on garde la version la plus avancée
// (réinitialisations d'abord, puis nombre de réponses, puis date)
function pathRank(st) { return [st.gen || 0, (st.stats && st.stats.answers) || 0, st.lastTick || 0]; }
function isNewer(a, b) {
  const x = pathRank(a), y = pathRank(b);
  for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] > y[i];
  return false;
}
async function pullAndMerge() {
  if (!connected() || SES) return false;
  const { data, error } = await Online.sb.from("saves").select("data").eq("user_id", Online.user.id).maybeSingle();
  Online.lastPull = Date.now();
  if (error || !data || !data.data || !data.data.paths) return false;
  let changed = false, active = false;
  for (const [k, rem] of Object.entries(data.data.paths)) {
    if (!COURSES[k] || !rem) continue;
    const loc = P.paths[k];
    if (!loc || isNewer(rem, loc)) {
      P.paths[k] = Object.assign(freshPath(), rem, { lastTick: Date.now() });
      changed = true;
      if (COURSE && k === COURSE.id) active = true;
    }
  }
  if (changed) {
    if (active) { S = P.paths[COURSE.id]; renderAll(); }
    save(); toast(L("syncedFrom"));
  }
  return changed;
}

function onlineOnVisible() {
  if (!connected() || SES || !$("#overlay").classList.contains("hidden")) { if (connected()) loadSocial(); return; }
  if (Date.now() - Online.lastPull > 20 * 1000) pullAndMerge().then(() => loadSocial());
}
function onlineOnHidden() { if (connected()) pushSave(true); }

// =====================================================================
//  AMIS : chargement, temps réel
// =====================================================================
async function loadSocial() {
  if (!connected()) return;
  const sb = Online.sb, me = Online.user.id;
  try {
    const rel = await sb.from("friendships").select("id, requester, addressee, status, blocked_by, created_at");
    if (rel.error) throw rel.error;
    const rows = rel.data || [];
    const other = (r) => (r.requester === me ? r.addressee : r.requester);
    const ids = [...new Set(rows.map(other))];
    const accepted = rows.filter((r) => r.status === "accepted").map(other);
    const [profs, prog, unread, mine] = await Promise.all([
      ids.length ? sb.from("profiles").select("id, username, avatar, last_seen").in("id", ids) : { data: [] },
      accepted.length ? sb.from("progress").select("user_id, data, updated_at").in("user_id", accepted) : { data: [] },
      sb.from("messages").select("sender").eq("recipient", me).is("read_at", null),
      sb.from("profiles").select("id, username, avatar").eq("id", me).maybeSingle(),
    ]);
    const pm = Object.fromEntries((profs.data || []).map((x) => [x.id, x]));
    const gm = Object.fromEntries((prog.data || []).map((x) => [x.user_id, x]));
    const prevIn = new Set(Online.requestsIn.map((r) => r.id));
    Online.unread = {};
    (unread.data || []).forEach((m) => { Online.unread[m.sender] = (Online.unread[m.sender] || 0) + 1; });
    const mk = (r) => ({ id: other(r), rel: r, profile: pm[other(r)] || { username: "?", avatar: "❔" }, progress: gm[other(r)] || null });
    Online.friends = rows.filter((r) => r.status === "accepted").map(mk)
      .sort((a, b) => (Online.unread[b.id] || 0) - (Online.unread[a.id] || 0)
        || new Date(b.profile.last_seen || 0) - new Date(a.profile.last_seen || 0));
    Online.requestsIn = rows.filter((r) => r.status === "pending" && r.addressee === me).map(mk);
    Online.requestsOut = rows.filter((r) => r.status === "pending" && r.requester === me).map(mk);
    Online.blocked = rows.filter((r) => r.status === "blocked" && r.blocked_by === me).map(mk);
    if (mine.data) { Online.me = mine.data; if (P.cloud.username !== mine.data.username) { P.cloud.username = mine.data.username; save(); } }
    Online.requestsIn.filter((r) => prevIn.size && !prevIn.has(r.id)).forEach((r) => { toast(L("newRequest", esc(r.profile.username))); SFX.combo(); });
    updateFriendsBadge();
    if (FV && FV.view === "home") renderFriendsHome();
    if (FV && FV.view === "chat") refreshChatHeader();
  } catch (e) { /* hors ligne */ }
}

function subscribeRealtime() {
  if (!connected()) return;
  const me = Online.user.id;
  Online.channel = Online.sb.channel("bricks-" + me)
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `recipient=eq.${me}` }, (pl) => onIncomingMessage(pl.new))
    .on("postgres_changes", { event: "*", schema: "public", table: "friendships" }, () => {
      clearTimeout(Online.relTimer); Online.relTimer = setTimeout(loadSocial, 700);
    })
    .subscribe();
}

async function onIncomingMessage(m) {
  if (!m || !connected()) return;
  // Message d'un ami tout juste ajouté : on recharge la liste pour connaître son nom
  if (!Online.friends.some((x) => x.id === m.sender)) await loadSocial();
  if (FV && FV.view === "chat" && FV.other === m.sender) {
    appendMessage(m); markRead(m.sender); SFX.ok();
    return;
  }
  Online.unread[m.sender] = (Online.unread[m.sender] || 0) + 1;
  updateFriendsBadge();
  const f = Online.friends.find((x) => x.id === m.sender);
  SFX.combo();
  toast(`💬 <b>${esc(f ? f.profile.username : "?")}</b> : ${esc(m.body.slice(0, 90))}`);
  if (FV && FV.view === "home") renderFriendsHome();
}

function updateFriendsBadge() {
  const b = $("#friends-badge"); if (!b) return;
  if (linked() && P.cloud.expired) { b.textContent = "!"; b.classList.remove("hidden"); return; }
  const n = Online.requestsIn.length + Object.values(Online.unread).reduce((s, x) => s + x, 0);
  b.textContent = n > 99 ? "99+" : n; b.classList.toggle("hidden", !n);
}

// =====================================================================
//  FENÊTRE « AMIS »
// =====================================================================
function friendsHead(title, backTo) {
  return `<div class="m-head">${backTo ? `<button class="btn btn-ghost f-back" data-back="${backTo}">${L("back2")}</button>` : ""}
    <div class="m-tag grow">${title}</div><button class="m-close" data-x>✕</button></div>`;
}
function bindFriendsCommon() {
  $("#modal [data-x]").onclick = closeModal;
  const n = $("#modal [data-news]");
  if (n) n.onclick = () => openChangelog(() => openFriends());
  const b = $("#modal [data-back]");
  if (b) b.onclick = () => openFriends(b.dataset.back);
}

function openFriends(view) {
  if (!P) return;
  if (!view) view = connected() ? "home" : "intro";
  FV = { view };
  if (view === "intro") return renderFriendsIntro();
  if (view === "signup") return renderAuthForm("signup");
  if (view === "login") return renderAuthForm("login");
  if (view === "home") { renderFriendsHome(); loadSocial(); }
}

function renderFriendsIntro() {
  const expired = linked() && P.cloud.expired;
  openModal(friendsHead(`👥 ${L("friends")}`) + `<div class="m-body">
      <div class="news-row">${newsButtonHtml()}</div>
      <div class="lesson-ico">👥</div>
      <div class="lesson-slide f-pitch"><div>${expired ? `<b>${L("sessionExpired")}</b>` : L("onlinePitch")}</div></div>
      ${HAS_CLOUD ? `<div class="f-actions">
        ${expired ? "" : `<button class="btn btn-gold btn-big" data-go="signup">${L("createAccount")}</button>`}
        <button class="btn ${expired ? "btn-gold" : ""} btn-big" data-go="login">${L("haveAccount")}</button></div>`
        : `<div class="form-err center">${L("offline")}</div>`}
    </div>`, "friends");
  bindFriendsCommon();
  $$("#modal [data-go]").forEach((el) => (el.onclick = () => openFriends(el.dataset.go)));
  KEY = null;
}

// Formulaire d'inscription / de connexion (aussi utilisé depuis l'écran des profils)
function renderAuthForm(mode, opts = {}) {
  const lang = opts.lang || UI, X = (k, ...a) => tr(lang, k, ...a);
  const signup = mode === "signup";
  const email0 = opts.email || (P && P.cloud && P.cloud.email) || "";
  openModal(friendsHead(signup ? X("createAccount") : (opts.title || X("haveAccount")), opts.noBack ? null : "intro") + `<div class="m-body auth">
      ${signup ? `<label class="m-instr" for="f-user">${X("username")}</label>
        <input class="type-in sm" id="f-user" maxlength="20" autocomplete="nickname" value="${esc(P ? P.name : "")}">` : ""}
      <label class="m-instr" for="f-email">${X("email")}</label>
      <input class="type-in sm" id="f-email" type="email" autocomplete="email" inputmode="email" value="${esc(email0)}">
      <label class="m-instr" for="f-pass">${signup ? X("password") : X("passwordLogin")}</label>
      <input class="type-in sm" id="f-pass" type="password" autocomplete="${signup ? "new-password" : "current-password"}">
      <label class="f-check"><input type="checkbox" id="f-show"> ${X("showPassword")}</label>
      <div class="form-err" id="f-err"></div>
      <p class="p-sub">${signup ? X("signupNote") : opts.restore ? "" : X("loginNote")}</p>
      ${signup ? "" : `<button class="btn btn-ghost f-link" id="f-forgot">${X("forgot")}</button>`}
    </div>
    <div class="m-foot"><div class="fb"></div><button class="btn btn-gold btn-big" id="f-submit">${signup ? X("createBtn") : X("loginBtn")}</button></div>`, "friends");
  bindFriendsCommon();
  const err = (m, ok) => { const e = $("#f-err"); e.innerHTML = m; e.classList.toggle("ok", !!ok); };
  $("#f-show").onchange = (e) => { $("#f-pass").type = e.target.checked ? "text" : "password"; };
  if (!IS_TOUCH) setTimeout(() => (signup ? $("#f-user") : email0 ? $("#f-pass") : $("#f-email")).focus(), 50);

  const submit = async () => {
    if (Online.busy) return;
    const email = $("#f-email").value.trim().toLowerCase(), pass = $("#f-pass").value;
    const uname = signup ? $("#f-user").value.trim().replace(/\s+/g, " ") : "";
    if (signup && !validUsername(uname)) return err(X("errUsername"));
    if (!validEmail(email)) return err(X("errEmail"));
    if (pass.length < 6) return err(X("errPassword"));
    const pid = opts.pid || P.id, sb = clientFor(pid);
    if (!sb) return err(X("offline"));
    Online.busy = true; $("#f-submit").disabled = true; err("…", true);
    try {
      if (signup) {
        const av = await sb.rpc("username_available", { p_name: uname });
        if (av.error) throw av.error;
        if (!av.data) return err(X("errUsernameTaken"));
        const { data, error } = await sb.auth.signUp({ email, password: pass, options: { data: { username: uname, avatar: P.avatar } } });
        if (error) return err(authError(error, lang));
        if (data.user && data.user.identities && data.user.identities.length === 0) return err(X("errExists"));
        if (!data.session) return err(X("checkEmail"), true);
        await finishLink(data.session.user, uname, email);
      } else {
        const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
        if (error) return err(authError(error, lang));
        if (opts.onLogin) return opts.onLogin(data.session, sb);
        const other = Object.values(ROOT.profiles).find((p) => p !== P && p.cloud && p.cloud.userId === data.user.id);
        if (other) { await sb.auth.signOut({ scope: "local" }); return err(X("errAlreadyLinked", esc(other.name))); }
        const prof = await sb.from("profiles").select("username").eq("id", data.user.id).maybeSingle();
        await finishLink(data.session.user, (prof.data && prof.data.username) || email.split("@")[0], email);
      }
    } catch (e) { err(authError(e, lang)); }
    finally { Online.busy = false; const s = $("#f-submit"); if (s) s.disabled = false; }
  };
  $("#f-submit").onclick = submit;
  KEY = (e) => { if (e.key === "Enter") submit(); };
  const fg = $("#f-forgot");
  if (fg) fg.onclick = async () => {
    const email = $("#f-email").value.trim();
    if (!validEmail(email)) return err(X("emailFirst"));
    const sb = clientFor(opts.pid || P.id);
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
    err(error ? authError(error, lang) : X("resetSent"), !error);
  };
}

async function finishLink(user, username, email) {
  P.cloud = { userId: user.id, username, email };
  save();
  await onlineAttach();     // fusionne, envoie la sauvegarde, charge les amis
  SFX.unlock();
  toast(L("linkedOk", esc(username)), "violet");
  openFriends("home");
}

function friendMini(f) {
  const d = f.progress && f.progress.data;
  if (!d) return "";
  return Object.entries(d).filter(([k, s]) => COURSES[k] && s.started)
    .map(([k, s]) => `<span class="fm">${COURSES[k].flag} ${s.xp} XP${streakAlive(s.streakLast) && s.streak ? ` · 🔥${s.streak}` : ""}</span>`).join("");
}

function renderFriendsHome() {
  if (!connected()) return openFriends("intro");
  const me = Online.me || { username: P.cloud.username, avatar: P.avatar };
  const row = (f, actions, click) => `<div class="frow ${click ? "click" : ""}" ${click ? `data-open="${f.id}"` : ""}>
      <span class="f-ava">${esc(f.profile.avatar)}</span>
      <div class="f-main"><div class="f-name">${esc(f.profile.username)}${Online.unread[f.id] ? `<span class="badge">${Online.unread[f.id]}</span>` : ""}</div>
        <div class="f-sub">${click ? friendMini(f) || L("seen", fmtAgo(f.profile.last_seen)) : ""}</div></div>
      <div class="f-btns">${actions}</div></div>`;
  const sec = (title, items) => (items ? `<div class="p-section"><h4>${title}</h4>${items}</div>` : "");
  const html = friendsHead(`👥 ${L("friends")}`) + `<div class="m-body friends-home">
      <div class="news-row">${newsButtonHtml()}</div>
      <div class="f-me"><span class="f-ava big">${esc(me.avatar)}</span>
        <div class="f-main"><div class="p-sub">${L("yourName")}</div><div class="f-myname">${esc(me.username)}</div>
        <div class="p-sub">${L("shareName")}</div></div></div>
      <div class="p-section"><h4>${L("addFriend")}</h4>
        <div class="f-add"><input class="type-in sm" id="f-addname" maxlength="20" placeholder="${esc(L("addPh"))}" autocomplete="off" autocapitalize="off">
        <button class="btn btn-gold" id="f-addbtn">${L("addBtn")}</button></div>
        <div class="form-err ${FV.addMsg && FV.addMsg.ok ? "ok" : ""}" id="f-addmsg">${FV.addMsg ? FV.addMsg.m : ""}</div></div>
      ${sec(L("reqIn"), Online.requestsIn.map((f) => row(f, `<button class="btn btn-good" data-acc="${f.rel.id}">${L("accept")}</button><button class="btn" data-dec="${f.rel.id}">${L("decline")}</button>`)).join(""))}
      <div class="p-section"><h4>${L("friendsList")}</h4>${Online.friends.length ? Online.friends.map((f) => row(f, "›", true)).join("") : `<p class="p-sub">${L("noFriends")}</p>`}</div>
      ${sec(L("reqOut"), Online.requestsOut.map((f) => row(f, `<span class="p-sub">${L("pending")}</span><button class="btn" data-cancel="${f.id}">${L("cancelReq")}</button>`)).join(""))}
      ${Online.blocked.length ? `<details class="p-section"><summary><h4>${L("blockedList")} (${Online.blocked.length})</h4></summary>${Online.blocked.map((f) => row(f, `<button class="btn" data-unblock="${f.id}">${L("unblock")}</button>`)).join("")}</details>` : ""}
      <div class="p-section f-account"><span class="p-sub">${L("cloudOn")} · ${esc(P.cloud.email || "")}</span>
        <div class="f-account-btns"><button class="btn btn-ghost" id="f-logout">${L("logout")}</button>
        <button class="btn btn-ghost danger-text" id="f-delete">${L("deleteAccount")}</button></div></div>
    </div>`;
  const keep = $("#f-addname") ? $("#f-addname").value : "";
  const hadFocus = document.activeElement && document.activeElement.id === "f-addname";
  openModal(html, "friends");
  if (keep) $("#f-addname").value = keep;
  if (hadFocus) $("#f-addname").focus();
  bindFriendsCommon();
  const sb = Online.sb;
  const addMsg = (m, ok) => { FV.addMsg = { m, ok }; const e = $("#f-addmsg"); e.innerHTML = m; e.classList.toggle("ok", !!ok); };
  const add = async () => {
    const name = $("#f-addname").value.trim(); if (!name) return;
    $("#f-addbtn").disabled = true;
    try {
      const fu = await sb.rpc("find_user", { p_name: name });
      if (fu.error) throw fu.error;
      if (!fu.data || !fu.data.length) {
        addMsg(name.toLowerCase() === (me.username || "").toLowerCase() ? L("r_self") : L("r_not_found"));
      } else {
        const r = await sb.rpc("send_friend_request", { p_target: fu.data[0].id });
        if (r.error) throw r.error;
        addMsg(L("r_" + r.data) || r.data, r.data === "sent" || r.data === "accepted");
        if (r.data === "sent" || r.data === "accepted") { $("#f-addname").value = ""; SFX.ok(); loadSocial(); }
      }
    } catch (e) { addMsg(L("offline")); }
    const b = $("#f-addbtn"); if (b) b.disabled = false;
  };
  $("#f-addbtn").onclick = add;
  KEY = (e) => { if (e.key === "Enter" && document.activeElement && document.activeElement.id === "f-addname") add(); };
  const act = async (fn, args) => { try { await sb.rpc(fn, args); } catch (e) { /* */ } loadSocial(); };
  $$("#modal [data-acc]").forEach((el) => (el.onclick = () => { SFX.unlock(); act("respond_friend_request", { p_id: +el.dataset.acc, p_accept: true }); }));
  $$("#modal [data-dec]").forEach((el) => (el.onclick = () => act("respond_friend_request", { p_id: +el.dataset.dec, p_accept: false })));
  $$("#modal [data-cancel]").forEach((el) => (el.onclick = () => act("remove_friend", { p_other: el.dataset.cancel })));
  $$("#modal [data-unblock]").forEach((el) => (el.onclick = () => act("unblock_user", { p_other: el.dataset.unblock })));
  $$("#modal [data-open]").forEach((el) => (el.onclick = () => openChat(el.dataset.open)));
  $("#f-logout").onclick = logoutCloud;
  $("#f-delete").onclick = confirmDeleteAccount;
}

async function logoutCloud() {
  try { if (Online.sb) await Online.sb.auth.signOut({ scope: "local" }); } catch (e) { /* */ }
  onlineDetach();
  P.cloud = null; save();
  openFriends("intro");
}

function confirmDeleteAccount() {
  const u = esc(P.cloud.username);
  dangerModal({
    lang: UI, title: L("deleteAccTitle"), intro: L("deleteAccIntro"), items: L("deleteAccItems", u), outro: L("deleteAccOutro"),
    onConfirm: async () => {
      try { const r = await Online.sb.rpc("delete_my_account"); if (r.error) throw r.error; }
      catch (e) { toast(L("offline"), "bad"); return; }
      await logoutCloud();
    },
  });
}

// ---------- Fiche d'un ami + discussion ----------
function friendCards(f) {
  const d = f.progress && f.progress.data;
  const paths = d ? Object.entries(d).filter(([k, s]) => COURSES[k] && s.started) : [];
  if (!paths.length) return `<p class="p-sub">${L("noProgress")}</p>`;
  return paths.map(([k, s]) => {
    const c = COURSES[k], rk = c.ranks[Math.min(s.rank || 0, c.ranks.length - 1)][1];
    const streak = streakAlive(s.streakLast) ? s.streak : 0;
    return `<div class="fpath">${c.flag}<div class="f-main"><div><b>${PATH_NAMES[k][UI]}</b> · ${esc(rk)}</div>
      <div class="fp-stats"><span>🎖️ ${s.xp} XP</span><span>🔥 ${streak}</span><span>🧱 ${s.bricks}/${c.bricks.length}</span><span>✨ ${s.attrs}/${c.bricks.reduce((n, b) => n + attrsOf(b).length, 0)}</span><span>⭐ ${s.stars}</span><span>💡 ${fmt(s.savoir)}</span></div>
      ${s.boss ? `<div class="fp-boss">${s.boss.defeated ? L("friendBossWon") : L("friendBoss", s.boss.hp)}</div>` : ""}
      ${s.boss2 ? `<div class="fp-boss">${s.boss2.defeated ? L("friendBossWon2") : L("friendBoss2", s.boss2.hp)}</div>` : ""}
      <div class="p-sub">${L("lastSession", fmtAgo(s.active))}</div></div></div>`;
  }).join("");
}

function fmtMsgTime(ts) {
  const d = new Date(ts), loc = UI === "fr" ? "fr-FR" : "en-US";
  const time = d.toLocaleTimeString(loc, { hour: "2-digit", minute: "2-digit" });
  return d.toDateString() === new Date().toDateString() ? time : d.toLocaleDateString(loc, { day: "numeric", month: "short" }) + " " + time;
}
function msgHtml(m) {
  const mine = m.sender === Online.user.id;
  return `<div class="msg ${mine ? "me" : "them"}"><div class="bubble">${esc(m.body)}</div><div class="mtime">${fmtMsgTime(m.created_at)}</div></div>`;
}
function appendMessage(m) {
  const box = $("#chat"); if (!box) return;
  const empty = box.querySelector(".chat-empty"); if (empty) empty.remove();
  if (m.id && box.querySelector(`[data-mid="${m.id}"]`)) return;
  box.insertAdjacentHTML("beforeend", msgHtml(m).replace('class="msg', `data-mid="${m.id || ""}" class="msg`));
  box.scrollTop = box.scrollHeight;
}
async function markRead(other) {
  if (!connected()) return;
  delete Online.unread[other]; updateFriendsBadge();
  try {
    await Online.sb.from("messages").update({ read_at: new Date().toISOString() })
      .eq("recipient", Online.user.id).eq("sender", other).is("read_at", null);
  } catch (e) { /* */ }
}
function refreshChatHeader() {
  const f = Online.friends.find((x) => x.id === (FV && FV.other));
  if (!f) { if (FV && FV.view === "chat") openFriends("home"); return; }
  const c = $("#f-cards"); if (c) c.innerHTML = friendCards(f);
  const s = $("#f-seen"); if (s) s.textContent = L("seen", fmtAgo(f.profile.last_seen));
}

async function openChat(otherId) {
  const f = Online.friends.find((x) => x.id === otherId); if (!f) return;
  FV = { view: "chat", other: otherId };
  const name = esc(f.profile.username);
  openModal(friendsHead(`💬 ${name}`, "home") + `<div class="m-body chat-body">
      <div class="f-me"><span class="f-ava big">${esc(f.profile.avatar)}</span><div class="f-main"><div class="f-myname">${name}</div>
        <div class="p-sub" id="f-seen">${L("seen", fmtAgo(f.profile.last_seen))}</div></div></div>
      <div id="f-cards">${friendCards(f)}</div>
      <div class="chat" id="chat"><div class="p-sub center chat-empty">…</div></div>
      <div class="f-danger"><button class="btn btn-ghost" id="f-remove">${L("removeFriend")}</button>
        <button class="btn btn-ghost danger-text" id="f-block">${L("block")}</button></div>
    </div>
    <div class="m-foot chat-input"><textarea id="chat-in" rows="1" maxlength="500" placeholder="${esc(L("chatPh"))}"></textarea>
      <button class="btn btn-gold" id="chat-send" title="${esc(L("send"))}">➤</button></div>`, "friends chat-modal");
  bindFriendsCommon();
  const sb = Online.sb, me = Online.user.id;
  const send = async () => {
    const inp = $("#chat-in"), body = inp.value.trim();
    if (!body) return;
    inp.value = ""; $("#chat-send").disabled = true;
    const { data, error } = await sb.from("messages").insert({ sender: me, recipient: otherId, body }).select().single();
    const btn = $("#chat-send"); if (btn) btn.disabled = false;
    if (error) { inp.value = body; toast(/rate_limited/.test(error.message || "") ? L("msgRate") : L("msgFail"), "bad"); return; }
    appendMessage(data);
    if (!IS_TOUCH) inp.focus();
  };
  $("#chat-send").onclick = send;
  KEY = (e) => { if (e.key === "Enter" && !e.shiftKey && document.activeElement && document.activeElement.id === "chat-in") send(); };
  $("#f-remove").onclick = async () => {
    if (!confirm(L("confirmRemove", f.profile.username))) return;
    await sb.rpc("remove_friend", { p_other: otherId }); await loadSocial(); openFriends("home");
  };
  $("#f-block").onclick = async () => {
    if (!confirm(L("confirmBlock", f.profile.username))) return;
    await sb.rpc("block_user", { p_other: otherId }); await loadSocial(); openFriends("home");
  };
  // Historique (100 derniers messages)
  const { data } = await sb.from("messages").select("id, sender, recipient, body, created_at")
    .or(`and(sender.eq.${me},recipient.eq.${otherId}),and(sender.eq.${otherId},recipient.eq.${me})`)
    .order("created_at", { ascending: false }).limit(100);
  const box = $("#chat"); if (!box || !FV || FV.other !== otherId) return;
  const list = (data || []).reverse();
  box.innerHTML = list.length ? list.map((m) => msgHtml(m).replace('class="msg', `data-mid="${m.id}" class="msg`)).join("")
    : `<div class="p-sub center chat-empty">${L("noMessages")}</div>`;
  box.scrollTop = box.scrollHeight;
  markRead(otherId);
  if (!IS_TOUCH) $("#chat-in").focus();
}

// =====================================================================
//  ÉCRAN DES PROFILS : retrouver son compte sur un nouvel appareil
// =====================================================================
function restoreAccountModal() {
  const lang = ROOT.uiLang;
  if (Object.keys(ROOT.profiles).length >= MAX_PROFILES) return toast(tr(lang, "maxProfiles"), "bad");
  const pid = uid();
  renderAuthForm("login", {
    lang, pid, noBack: true, restore: true, title: tr(lang, "restoreTitle"),
    onLogin: async (session, sb) => {
      const userId = session.user.id;
      const existing = Object.values(ROOT.profiles).find((p) => p.cloud && p.cloud.userId === userId);
      if (existing) {           // déjà sur cet appareil : on lui transmet la session
        const raw = localStorage.getItem("bricks-sb-" + pid);
        if (raw) localStorage.setItem("bricks-sb-" + existing.id, raw);
        localStorage.removeItem("bricks-sb-" + pid); delete CLIENTS[pid]; delete CLIENTS[existing.id];
        delete existing.cloud.expired; save();
        return enterProfile(existing.id);
      }
      const [prof, sv] = await Promise.all([
        sb.from("profiles").select("username, avatar").eq("id", userId).maybeSingle(),
        sb.from("saves").select("data").eq("user_id", userId).maybeSingle(),
      ]);
      const username = (prof.data && prof.data.username) || session.user.email.split("@")[0];
      const d = (sv.data && sv.data.data) || {};
      let name = username;
      while (Object.values(ROOT.profiles).some((p) => p.name.toLowerCase() === name.toLowerCase())) name += "²";
      const paths = {};
      for (const [k, st] of Object.entries(d.paths || {})) if (COURSES[k]) paths[k] = Object.assign(freshPath(), st, { lastTick: Date.now() });
      ROOT.profiles[pid] = {
        id: pid, name, avatar: (prof.data && prof.data.avatar) || d.avatar || "🦊", created: Date.now(),
        settings: d.settings || { sound: true }, lastPath: paths[d.lastPath] ? d.lastPath : Object.keys(paths)[0] || "en",
        paths, cloud: { userId, username, email: session.user.email },
      };
      save();
      if (!Object.keys(paths).length) return choosePathModal(lang, (p) => enterProfile(pid, p));
      enterProfile(pid);
    },
  });
}

// Au retour d'un lien reçu par e-mail (confirmation / mot de passe oublié)
function handleAuthRedirect() {
  const h = location.hash || "";
  if (!/access_token=|error_description=/.test(h)) return;
  const params = new URLSearchParams(h.slice(1));
  history.replaceState(null, "", location.pathname + location.search);
  const lang = ROOT.uiLang;
  if (params.get("error_description")) { setTimeout(() => toast(esc(params.get("error_description")), "bad"), 300); return; }
  if (!HAS_CLOUD) return;
  const tmp = window.supabase.createClient(CLOUD_URL, CLOUD_KEY, {
    auth: { storageKey: "bricks-sb-tmp", persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  tmp.auth.setSession({ access_token: params.get("access_token"), refresh_token: params.get("refresh_token") }).then(({ error }) => {
    if (error) return toast(tr(lang, "errGeneric"), "bad");
    if (params.get("type") !== "recovery") { toast(tr(lang, "emailConfirmed"), "violet"); tmp.auth.signOut({ scope: "local" }); return; }
    const X = (k, ...a) => tr(lang, k, ...a);
    openModal(`<div class="m-head"><div class="m-tag grow">${X("newPassword")}</div><button class="m-close" data-x>✕</button></div>
      <div class="m-body auth"><label class="m-instr" for="f-np">${X("password")}</label>
      <input class="type-in sm" id="f-np" type="password" autocomplete="new-password"><div class="form-err" id="f-err"></div></div>
      <div class="m-foot"><div class="fb"></div><button class="btn btn-gold btn-big" id="f-npbtn">${X("newPasswordBtn")}</button></div>`, "friends");
    $("#modal [data-x]").onclick = closeModal;
    const go = async () => {
      const pw = $("#f-np").value;
      if (pw.length < 6) { $("#f-err").textContent = X("errPassword"); return; }
      const { error: e2 } = await tmp.auth.updateUser({ password: pw });
      if (e2) { $("#f-err").textContent = authError(e2, lang); return; }
      await tmp.auth.signOut({ scope: "local" });
      closeModal(); toast(X("passwordChanged"), "violet");
    };
    $("#f-npbtn").onclick = go;
    KEY = (e) => { if (e.key === "Enter") go(); };
  });
}
