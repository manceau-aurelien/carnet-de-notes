"use strict";
// =====================================================================
//  BRICKS — moteur du jeu (profils multiples, parcours anglais & français)
// =====================================================================

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
// Le site de test garde sa propre sauvegarde : il ne touche jamais à celle du vrai jeu
const ROOT_KEY = window.BRICKS_TEST ? "bricks_test_v1" : "bricks_v2";
const OLD_KEY = "bricks_english_v1";   // sauvegarde de la V1 (migrée automatiquement)
const MIN = 60e3, HOUR = 36e5, DAY = 864e5;
const BASE_HL = 15 * MIN;          // demi-vie après la 1re leçon (≈15-21 min)
const MIN_HL = 5 * MIN;
const MAX_HL = 120 * DAY;
const STAR_HL = [10 * MIN, HOUR, 6 * HOUR, DAY, 5 * DAY]; // seuils des étoiles
const ATTR_WEIGHT = { vocab: 1, spell: 1.2, aff: 1.5, neg: 2, q: 2.5 };
const BRICK_COST = [0, 25, 70, 150];
const FORM = { aff: 0, neg: 1, q: 2 };
const OFFLINE_CAP = 12 * HOUR;
const MAX_PROFILES = 8;
const AVATARS = ["🦊", "🐼", "🐸", "🦁", "🐯", "🐨", "🐵", "🦄", "🐙", "🐧", "🦉", "🐢", "🐝", "🐳", "🌟", "🚀"];
const ACCENTS = ["é", "è", "ê", "à", "â", "ç", "ù", "û", "î", "ï", "ô", "ë", "œ"];

// ---------- Structure commune aux deux parcours ----------
const LAYOUT = {
  basics: { x: 50, y: 6, tier: 0, req: [] },
  pronouns: { x: 22, y: 26, tier: 1, req: ["basics"] },
  colors: { x: 56, y: 26, tier: 1, req: ["basics"] },
  numbers: { x: 86, y: 26, tier: 1, req: ["basics"] },
  family: { x: 8, y: 50, tier: 2, req: ["pronouns"] },
  verbs: { x: 26, y: 50, tier: 2, req: ["pronouns"] },
  adjectives: { x: 42, y: 50, tier: 2, req: ["pronouns"] },
  animals: { x: 60, y: 50, tier: 2, req: ["colors"] },
  food: { x: 78, y: 50, tier: 2, req: ["colors"] },
  house: { x: 14, y: 74, tier: 3, req: ["family"] },
  body: { x: 50, y: 74, tier: 3, req: ["animals"] },
  clothes: { x: 84, y: 74, tier: 3, req: ["food"] },
};
// Attributs, dans l'ordre où on les greffe
const ATTRS = [
  { id: "vocab", icon: "📖", cost: 0, skill: null },
  { id: "spell", icon: "✍️", cost: 15, skill: "spell" },
  { id: "aff", icon: "✅", cost: 30, skill: "aff" },
  { id: "neg", icon: "🚫", cost: 50, skill: "neg" },
  { id: "q", icon: "❓", cost: 80, skill: "q" },
];
const AT = Object.fromEntries(ATTRS.map((a) => [a.id, a]));
const SKILL_DEF = [
  { id: "spell", cost: 15, req: { bricks: ["basics"], skills: [] } },
  { id: "aff", cost: 40, req: { bricks: ["pronouns"], skills: ["spell"] } },
  { id: "neg", cost: 100, req: { bricks: ["verbs"], skills: ["aff"] } },
  { id: "q", cost: 180, req: { bricks: [], skills: ["neg"] } },
];

// Drapeaux dessinés en SVG (Windows n'affiche pas les drapeaux emoji)
const FLAGS = {
  en: `<svg class="flag" viewBox="0 0 60 30" aria-hidden="true"><clipPath id="fl-uk-a"><path d="M0,0v30h60V0z"/></clipPath><clipPath id="fl-uk-b"><path d="M30,15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#fl-uk-a)"><path d="M0,0v30h60V0z" fill="#012169"/><path d="M0,0 60,30M60,0 0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 60,30M60,0 0,30" clip-path="url(#fl-uk-b)" stroke="#C8102E" stroke-width="4"/><path d="M30,0v30M0,15h60" stroke="#fff" stroke-width="10"/><path d="M30,0v30M0,15h60" stroke="#C8102E" stroke-width="6"/></g></svg>`,
  fr: `<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#002654"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE1126"/></svg>`,
};

// ---------- Préparation des parcours ----------
function genderOf(c, w) {
  if (c.target !== "fr") return null;
  if (/^(un|le) /.test(w)) return "m";
  if (/^(une|la) /.test(w)) return "f";
  return null;
}
for (const c of Object.values(COURSES)) {
  c.flag = FLAGS[c.id];
  c.bricks.forEach((b) => {
    Object.assign(b, LAYOUT[b.id]);
    b.w = b.words.map((s) => {
      const [tg, nat] = s.split("=");
      const alts = tg.split("/").map((x) => x.trim());
      return { tg: alts[0], alts, nat: nat.trim(), g: genderOf(c, alts[0]) };
    });
    b.s = b.sentences.map((s) => {
      const [a, n] = s.split("||");
      return { tg: a.split("|").map((x) => x.trim()), nat: n.split("|").map((x) => x.trim()) };
    });
  });
  c.BR = Object.fromEntries(c.bricks.map((b) => [b.id, b]));
  c.SKILLS = SKILL_DEF.map((d) => ({ ...d, ...c.skills[d.id] }));
  c.SK = Object.fromEntries(c.SKILLS.map((s) => [s.id, s]));
}

// ---------- État global ----------
let ROOT = null;        // { profiles, lastProfile, uiLang }
let P = null;           // profil actif
let S = null;           // état du parcours actif (rien n'est partagé entre parcours)
let COURSE = null, UI = "fr", BRICKS = [], BR = {}, SKILLS = [], SK = {};

// ---------- Textes ----------
function tr(lang, key, ...a) {
  const v = STR[lang][key] !== undefined ? STR[lang][key] : STR.fr[key];
  return typeof v === "function" ? v(...a) : v;
}
const L = (key, ...a) => tr(UI, key, ...a);
const attrName = (id) => STR[UI].attr[id][0];
const attrDesc = (id) => STR[UI].attr[id][1];

// ---------- Utilitaires ----------
const rnd = (n) => Math.floor(Math.random() * n);
const pick = (arr) => arr[rnd(arr.length)];
function shuffle(a) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
function fmt(n) {
  if (n < 1000) return String(Math.floor(n));
  if (n < 1e6) return (n / 1e3).toFixed(n < 1e4 ? 2 : 1) + "k";
  return (n / 1e6).toFixed(2) + "M";
}
function fmtDur(ms, lang = UI) {
  const d = STR[lang];
  if (ms < MIN) return d.durLess;
  if (ms < HOUR) return Math.round(ms / MIN) + " " + d.durMin;
  const num = (x, dec) => { const t = x.toFixed(dec).replace(".0", ""); return lang === "fr" ? t.replace(".", ",") : t; };
  if (ms < DAY) return num(ms / HOUR, ms < 10 * HOUR ? 1 : 0) + " " + d.durH;
  return num(ms / DAY, ms < 10 * DAY ? 1 : 0) + " " + d.durD;
}
function retColor(r) {
  if (r >= 0.75) return "var(--good)";
  if (r >= 0.5) return "var(--warn)";
  if (r >= 0.25) return "var(--orange)";
  return "var(--bad)";
}
function lev(a, b) {
  const m = a.length, n = b.length, d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}
const IS_TOUCH = matchMedia("(hover: none)").matches;
const isNarrow = () => matchMedia("(max-width: 1100px)").matches;

// ---------- Phrases -> jetons (tuiles) ----------
function tok(s) {
  return s.replace(/\s*[.?!]+$/, "").split(/\s+/)
    .map((w) => (COURSE.target === "en" && (w === "I" || /^I'/.test(w)) ? w : w.toLowerCase()));
}
function suffix(s) { const m = s.match(/\s*[.?!]+$/); return m ? m[0] : ""; }
function show(tokens, suf) { const s = tokens.join(" "); return s.charAt(0).toUpperCase() + s.slice(1) + suf; }

// ---------- Sauvegarde ----------
function freshPath() {
  return {
    savoir: 0, earned: 0, xp: 0, bricks: {}, skills: {},
    streak: { days: 0, last: null }, lastTick: Date.now(), started: false,
    stats: { answers: 0, correct: 0, sessions: 0 },
  };
}
function loadRoot() {
  try { ROOT = JSON.parse(localStorage.getItem(ROOT_KEY)); } catch (e) { ROOT = null; }
  if (ROOT && ROOT.profiles) return;
  ROOT = { v: 2, uiLang: (navigator.language || "fr").toLowerCase().startsWith("fr") ? "fr" : "en", lastProfile: null, profiles: {} };
  // Migration de la sauvegarde V1 (un seul joueur, parcours anglais)
  if (!window.BRICKS_TEST) try {
    const old = JSON.parse(localStorage.getItem(OLD_KEY));
    if (old && old.started) {
      const id = uid(), settings = old.settings || { sound: true };
      delete old.settings; delete old.v;
      ROOT.profiles[id] = { id, name: "Joueur 1", avatar: "🦊", created: Date.now(), settings, lastPath: "en", paths: { en: Object.assign(freshPath(), old) } };
      ROOT.lastProfile = id; ROOT.uiLang = "fr";
    }
  } catch (e) { /* rien à migrer */ }
  save();
}
function save() {
  if (S) S.lastTick = Date.now();
  try { localStorage.setItem(ROOT_KEY, JSON.stringify(ROOT)); } catch (e) { /* stockage plein ou bloqué */ }
  if (typeof scheduleCloudSync === "function") scheduleCloudSync();
}

// ---------- Érosion (courbe d'oubli) ----------
function ret(a, t = Date.now()) {
  if (!a || !a.learned) return 0;
  return Math.pow(0.5, Math.max(0, t - a.last) / a.hl);
}
function stars(a) { return a && a.learned ? STAR_HL.filter((h) => a.hl >= h).length : 0; }
function starStr(n) { return "★".repeat(n) + `<span class="dim">${"★".repeat(5 - n)}</span>`; }
function attrBaseRate(b, aid, a) {
  return 0.005 * (1 + b.tier * 0.5) * (1 + stars(a) * 0.5) * ATTR_WEIGHT[aid];
}
function eachLearned(fn, st = S, course = COURSE) {
  for (const id in st.bricks) {
    const b = course.BR[id], bs = st.bricks[id];
    for (const aid in bs.attrs) { const a = bs.attrs[aid]; if (a.learned) fn(b, aid, a, bs); }
  }
}
function totalRate() { let r = 0; eachLearned((b, aid, a) => { r += attrBaseRate(b, aid, a) * ret(a); }); return r; }
function brickRate(b) {
  const bs = S.bricks[b.id]; let r = 0;
  for (const aid in bs.attrs) { const a = bs.attrs[aid]; if (a.learned) r += attrBaseRate(b, aid, a) * ret(a); }
  return r;
}
function brickSolidity(b) {
  const bs = S.bricks[b.id]; if (!bs) return 0;
  const ids = Object.keys(bs.attrs); if (!ids.length) return 0;
  return ids.reduce((s, k) => s + ret(bs.attrs[k]), 0) / ids.length;
}
// Production exacte pendant une absence : intégrale de la courbe d'oubli
function offlineGain(dt, from = Date.now()) {
  let g = 0;
  eachLearned((b, aid, a) => {
    const r0 = ret(a, from), hl = a.hl;
    g += attrBaseRate(b, aid, a) * r0 * (hl / 1000 / Math.LN2) * (1 - Math.pow(0.5, dt / hl));
  });
  return g;
}
function erodedList() { const out = []; eachLearned((b, aid, a) => { if (ret(a) < 0.5) out.push({ b, aid, a }); }); return out; }

// Révision : la demi-vie grandit d'autant plus que l'attribut était érodé
function applyReview(a, score) {
  const now = Date.now();
  if (!a.learned) { a.learned = true; a.hl = BASE_HL * (0.4 + score); a.last = now; a.reviews = 1; return; }
  const R = ret(a);
  if (score >= 0.7) a.hl = Math.min(MAX_HL, a.hl * (1.05 + 1.8 * (1 - R) * score));
  else a.hl = Math.max(MIN_HL, a.hl * 0.6);
  a.last = now; a.reviews = (a.reviews || 0) + 1;
}

// ---------- Débloquages ----------
const owned = (id) => !!S.bricks[id];
const brickReqMet = (b) => b.req.every(owned);
const skillReqMet = (s) => s.req.bricks.every(owned) && s.req.skills.every((x) => S.skills[x]);
const brickCost = (b) => BRICK_COST[b.tier];
const attrCost = (b, at) => Math.round(at.cost * (1 + b.tier * 0.5));
function attrLockReason(b, at) {
  const bs = S.bricks[b.id];
  if (at.skill && !S.skills[at.skill]) return L("needSkill", SK[at.skill].icon, SK[at.skill].name);
  // Chaîne : l'attribut précédent doit avoir été terminé au moins une fois (l'érosion ne retire pas l'accès)
  const k = ATTRS.indexOf(at);
  if (k > 0) {
    const prev = ATTRS[k - 1], pa = bs.attrs[prev.id];
    if (!pa || !pa.learned) return L("needPrev", prev.icon, attrName(prev.id));
  }
  return null;
}
// Première leçon d'un attribut : 70 % au 1er essai, puis 80 % aux essais suivants
const PASS_FIRST = 0.7, PASS_RETRY = 0.8;
const passNeed = (a) => (a && a.tries ? PASS_RETRY : PASS_FIRST);
function newBrickState(b) { return { attrs: { vocab: { learned: false } }, werr: Array(b.w.length).fill(1), isNew: true }; }
function spend(n) { if (S.savoir < n) return false; S.savoir -= n; return true; }

function rankInfo(st = S, course = COURSE) {
  const R = course.ranks;
  let i = 0; while (i + 1 < R.length && st.xp >= R[i + 1][0]) i++;
  const cur = R[i], next = R[i + 1];
  return { i, name: cur[1], pct: next ? (st.xp - cur[0]) / (next[0] - cur[0]) : 1 };
}
function addXP(n) {
  const before = rankInfo().i; S.xp += n;
  const after = rankInfo();
  if (after.i > before) { toast(L("rankUp", after.name), "violet"); SFX.unlock(); }
}
function touchStreak() {
  const d = new Date(), today = d.toDateString(), y = new Date(d - DAY).toDateString();
  if (S.streak.last === today) return;
  S.streak.days = S.streak.last === y ? S.streak.days + 1 : 1;
  S.streak.last = today;
  if (S.streak.days > 1) toast(L("streak", S.streak.days));
}

// ---------- Audio : voix de la langue apprise + petits sons ----------
const HAS_TTS = "speechSynthesis" in window;
let VOICE = null;
const sound = () => (P ? P.settings.sound : true);
function pickVoice() {
  if (!HAS_TTS || !COURSE) return;
  const vs = speechSynthesis.getVoices();
  const good = (v) => /Google|Natural|Online|Neural|Premium|Enhanced/i.test(v.name);
  const prefs = COURSE.target === "fr" ? [/fr[-_]FR/i, /^fr/i] : [/en[-_]GB/i, /en[-_]US/i, /^en/i];
  VOICE = null;
  for (const re of prefs) { VOICE = vs.find((v) => re.test(v.lang) && good(v)); if (VOICE) return; }
  for (const re of prefs) { VOICE = vs.find((v) => re.test(v.lang)); if (VOICE) return; }
}
if (HAS_TTS) speechSynthesis.onvoiceschanged = pickVoice;
function speak(text, delay = 0, rate = 0.88) {
  if (!sound() || !HAS_TTS || !COURSE) return;
  setTimeout(() => {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = VOICE ? VOICE.lang : COURSE.target === "fr" ? "fr-FR" : "en-GB";
    if (VOICE) u.voice = VOICE;
    u.rate = rate;
    speechSynthesis.speak(u);
  }, delay);
}
let AC = null;
function beep(notes, type = "sine", dur = 0.09, vol = 0.08) {
  if (!sound()) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === "suspended") AC.resume();
    let t = AC.currentTime;
    notes.forEach((f) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur * 1.8);
      o.connect(g).connect(AC.destination); o.start(t); o.stop(t + dur * 2); t += dur;
    });
  } catch (e) { /* audio indisponible */ }
}
const SFX = {
  ok: () => beep([660, 880]),
  ko: () => beep([220, 160], "square", 0.12, 0.04),
  unlock: () => beep([523, 659, 784, 1047], "triangle", 0.1, 0.09),
  combo: () => beep([880, 1175, 1568], "sine", 0.07, 0.07),
};
// Sur mobile, la voix et le son doivent être « réveillés » par un premier geste
document.addEventListener("pointerdown", function unlockAudio() {
  document.removeEventListener("pointerdown", unlockAudio);
  try { if (HAS_TTS) speechSynthesis.speak(new SpeechSynthesisUtterance("")); } catch (e) { /* */ }
}, { once: true });

// =====================================================================
//  INTERFACE DU JEU
// =====================================================================
function renderStatic() {
  document.title = `BRICKS — ${COURSE.tagline}`;
  document.documentElement.lang = UI;
  $("#topbar").innerHTML = `
    <div class="logo">🧱 <span>BRICKS</span><small>${COURSE.tagline}</small></div>
    <div class="stats">
      <div class="stat savoir" title="${esc(L("savoirTip"))}">
        <div class="stat-main"><span class="ico">💡</span><span id="savoir">0</span></div>
        <div class="stat-sub"><span id="rate">+0</span> /min</div></div>
      <div class="stat rank" title="${esc(L("rankTip"))}">
        <div class="stat-main"><span id="rank-name"></span></div>
        <div class="xpbar"><div id="xp-fill"></div></div>
        <div class="stat-sub"><span id="xp">0</span> XP</div></div>
      <div class="stat streak" title="${esc(L("streakTip"))}">
        <div class="stat-main"><span class="ico">🔥</span><span id="streak">0</span></div>
        <div class="stat-sub" id="streak-sub"></div></div>
    </div>
    <div class="spacer"></div>
    <button id="btn-express" class="btn btn-gold" title="${esc(L("expressTip"))}">⚡<span class="lbl"> ${L("express")}</span><span id="erode-count" class="badge hidden">0</span></button>
    <button id="btn-friends" class="btn btn-icon" title="${esc(L("friendsTip"))}">👥<span id="friends-badge" class="badge hidden"></span></button>
    <button id="btn-sound" class="btn btn-icon" title="${esc(L("soundTip"))}">🔊</button>
    <button id="btn-profile" class="btn profile-chip" title="${esc(L("profileTip"))}">
      <span class="pc-ava">${P.avatar}</span><span class="pc-name">${esc(P.name)}</span><span class="pc-flag">${COURSE.flag}</span></button>
    <div id="menu" class="menu hidden"></div>`;
  $("#band-grammar").innerHTML = `${L("bandGrammar")} <small>${L("bandGrammarSub")}</small>`;
  $("#band-vocab").innerHTML = `${L("bandVocab")} <small>${L("bandVocabSub")}</small>`;
  $("#sheet-close").title = L("close");

  $("#btn-express").onclick = expressReview;
  $("#btn-friends").onclick = () => openFriends();
  $("#btn-sound").onclick = () => { P.settings.sound = !P.settings.sound; if (!P.settings.sound && HAS_TTS) speechSynthesis.cancel(); save(); renderTop(); };
  $("#btn-profile").onclick = (e) => { e.stopPropagation(); renderMenu(); $("#menu").classList.toggle("hidden"); };
  updateNewsDot();
  if (typeof testModeHook === "function") testModeHook();
}

function renderMenu() {
  const other = COURSE.id === "en" ? "fr" : "en", oc = COURSES[other];
  const pathItem = P.paths[other]
    ? L("menuSwitch", oc.flag, PATH_NAMES[other][UI])
    : L("menuStart", oc.flag, PATH_NAMES[other][UI], STR[UI].langName[oc.ui]);
  $("#menu").innerHTML = `
    <div class="menu-head"><span class="pc-ava">${P.avatar}</span><b>${esc(P.name)}</b></div>
    <button data-act="path" data-path="${other}">${pathItem}</button>
    <button data-act="profiles">${L("menuProfiles")}</button>
    <button data-act="news">${L("menuNews")}${changelogUnseen() ? `<span class="news-pill">${L("newsNew")}</span>` : ""}</button>
    <button data-act="help">${L("menuHelp")}</button>
    <button data-act="reset" class="danger">${L("menuReset")}</button>`;
  $("#menu").onclick = (e) => {
    const el = e.target.closest("[data-act]"); if (!el) return;
    $("#menu").classList.add("hidden");
    const act = el.dataset.act;
    if (act === "path") enterPath(el.dataset.path);
    if (act === "profiles") showProfiles();
    if (act === "news") openChangelog();
    if (act === "help") slides(L("help"), { icon: "🧱", title: L("howTo"), finalLabel: L("gotIt") });
    if (act === "reset") confirmResetPath();
  };
}

function renderTop() {
  $("#savoir").textContent = fmt(S.savoir);
  const rm = totalRate() * 60;
  $("#rate").textContent = "+" + rm.toFixed(rm < 10 ? 2 : 1);
  const r = rankInfo();
  $("#rank-name").textContent = r.name;
  $("#xp-fill").style.width = (r.pct * 100).toFixed(1) + "%";
  $("#xp").textContent = S.xp;
  $("#streak").textContent = S.streak.days;
  $("#streak-sub").textContent = L("days", S.streak.days);
  const n = erodedList().length, badge = $("#erode-count");
  badge.textContent = n; badge.classList.toggle("hidden", n === 0);
  $("#btn-sound").textContent = P.settings.sound ? "🔊" : "🔇";
}

// ---------- Arbre ----------
let SEL = { type: "brick", id: "basics" };
const nodeTop = (y) => 50 + y * 7;

function renderSkills() {
  const chip = (s) => {
    let cls = "locked", sub = L("skillLocked");
    if (S.skills[s.id]) { cls = "owned"; sub = L("skillOwned"); }
    else if (skillReqMet(s)) { cls = "available"; sub = `💡 ${s.cost}`; }
    const sel = SEL.type === "skill" && SEL.id === s.id ? " selected" : "";
    return `<div class="skill ${cls}${sel}" data-skill="${s.id}"><span class="s-ico">${s.icon}</span>
      <div><div class="s-name">${s.name}</div><div class="s-sub">${sub}</div></div></div>`;
  };
  const arrow = '<span class="arrow">›</span>';
  const fut = COURSE.future.map((f) => `<div class="skill future" title="${esc(L("futureTip"))}"><span class="s-ico">${f.icon}</span>
      <div><div class="s-name">${f.name}</div><div class="s-sub">${L("future")}</div></div></div>`).join(arrow);
  $("#skills-band").innerHTML = SKILLS.map(chip).join(arrow) + arrow + fut;
}

function nodeHtml(b) {
  const bs = S.bricks[b.id];
  let cls, sub, p = 0, color = "#3a4677", extra = "", pips = "";
  if (bs) {
    const sol = brickSolidity(b); p = sol * 100; color = retColor(sol); cls = "owned";
    sub = bs.attrs.vocab.learned ? L("solidPct", Math.round(sol * 100)) : L("toLearn");
    const er = Object.values(bs.attrs).filter((a) => a.learned && ret(a) < 0.5).length;
    if (er) extra = `<span class="crack" title="${esc(L("erodedTip", er))}">!</span>`;
    else if (!bs.attrs.vocab.learned) extra = `<span class="newbadge">NEW</span>`;
    pips = ATTRS.map((at) => {
      const a = bs.attrs[at.id], nm = attrName(at.id);
      if (!a) return `<span class="pip" title="${esc(L("pipNone", nm))}"></span>`;
      if (!a.learned) return `<span class="pip" style="border-color:var(--gold)" title="${esc(L("pipToLearn", nm))}"></span>`;
      const r = ret(a);
      return `<span class="pip" style="background:${retColor(r)};border-color:${retColor(r)}" title="${esc(nm)} : ${Math.round(r * 100)}%"></span>`;
    }).join("");
  } else if (brickReqMet(b)) { cls = "available"; sub = `💡 ${brickCost(b)}`; }
  else { cls = "locked"; sub = "🔒 " + b.req.map((r) => BR[r].name).join(", "); }
  const sel = SEL.type === "brick" && SEL.id === b.id ? " selected" : "";
  return `<div class="node ${cls}${sel}" data-brick="${b.id}" style="left:${b.x}%;top:${nodeTop(b.y)}px">
    <div class="ring" style="--p:${p};--ring-color:${color}"><div class="ring-in">${b.icon}</div>${extra}</div>
    <div class="n-name">${b.name}</div><div class="n-sub">${sub}</div>
    ${pips ? `<div class="pips">${pips}</div>` : ""}</div>`;
}

function renderTree() {
  let lines = "";
  BRICKS.forEach((b) => b.req.forEach((r) => {
    const p = BR[r], cls = owned(b.id) ? "on" : brickReqMet(b) ? "avail" : "";
    lines += `<line class="${cls}" x1="${p.x}%" y1="${nodeTop(p.y)}" x2="${b.x}%" y2="${nodeTop(b.y)}"/>`;
  }));
  $("#links").innerHTML = lines + bossLinks();
  // Groupés par niveau : arbre positionné sur ordinateur, rangées empilées sur téléphone
  $("#nodes").innerHTML = [0, 1, 2, 3].map((t) => `<div class="tier"><div class="tier-label">${L("tier", t)}</div>
    <div class="tier-row">${BRICKS.filter((b) => b.tier === t).map(nodeHtml).join("")}</div></div>`).join("")
    + `<div class="tier boss-tier"><div class="tier-label">${L("bossTier")}</div><div class="tier-row">${bossNodeHtml()}</div></div>`;
}

// ---------- Panneau latéral (feuille glissante sur mobile) ----------
function renderPanel() {
  $("#panel-body").innerHTML = SEL.type === "skill" ? skillPanel(SK[SEL.id]) : SEL.type === "boss" ? bossPanel() : brickPanel(BR[SEL.id]);
}
function openSheet() { if (isNarrow()) { $("#panel").classList.add("open"); $("#sheet-bg").classList.remove("hidden"); } }
function closeSheet() { $("#panel").classList.remove("open"); $("#sheet-bg").classList.add("hidden"); }

function reqLine(ok, txt) { return `<div class="req ${ok ? "ok" : "ko"}">${ok ? "✔" : "✘"} ${txt}</div>`; }

function skillPanel(s) {
  const has = S.skills[s.id];
  const reqs = [
    ...s.req.bricks.map((id) => reqLine(owned(id), L("reqBrick", BR[id].icon, BR[id].name))),
    ...s.req.skills.map((id) => reqLine(!!S.skills[id], L("reqSkill", SK[id].icon, SK[id].name))),
  ];
  const can = skillReqMet(s) && S.savoir >= s.cost;
  const action = has ? `<button class="btn full" data-act="lesson">${L("reviewLesson")}</button>`
    : `<button class="btn btn-gold btn-big full" data-act="unlock-skill" ${can ? "" : "disabled"}>${L("learnFor", s.cost)}</button>`;
  return `<div class="p-head"><div class="p-ico">${s.icon}</div><div>
      <div class="p-title">${s.name}</div><div class="p-sub">${L("grammarSkill")}</div></div></div>
    <div class="p-text">${L("skillUnlocks", AT[s.id].icon, attrName(s.id))}</div>
    ${reqs.length ? `<div class="p-section"><h4>${L("prereqs")}</h4>${reqs.join("")}</div>` : ""}
    <div class="p-section">${action}</div>
    ${has ? `<div class="p-section"><h4>${L("memo")}</h4><div class="p-text">${s.lesson.map((l) => `<p>${l}</p>`).join("")}</div></div>` : ""}`;
}

function gtag(w) { return w.g ? `<span class="gtag ${w.g}">${w.g === "m" ? L("masc") : L("fem")}</span>` : ""; }

function brickPanel(b) {
  const bs = S.bricks[b.id];
  const head = `<div class="p-head"><div class="p-ico">${b.icon}</div><div>
      <div class="p-title">${b.name}</div><div class="p-sub">${L("brickLevel", b.tier)}</div></div></div>`;
  const hidden = b.w.map((w) => `<div class="word"><div class="tg">???</div><div class="nat">${w.nat}</div></div>`).join("");
  if (!bs) {
    const reqOk = brickReqMet(b), can = reqOk && S.savoir >= brickCost(b);
    return head + `<div class="p-text">${L("lockedText", b.name)}</div>
      <div class="p-section"><h4>${L("prereqs")}</h4>${b.req.length ? b.req.map((r) => reqLine(owned(r), L("reqBrick", BR[r].icon, BR[r].name))).join("") : reqLine(true, L("none"))}</div>
      <div class="p-section"><button class="btn btn-gold btn-big full" data-act="unlock-brick" ${can ? "" : "disabled"}>${L("unlockFor", brickCost(b))}</button>
      ${reqOk && !can ? `<div class="p-sub" style="margin-top:8px;text-align:center">${L("missing", fmt(brickCost(b) - S.savoir))}</div>` : ""}</div>
      <div class="p-section"><h4>${L("preview")}</h4><div class="words">${hidden}</div></div>`;
  }

  const sol = brickSolidity(b);
  const top = !bs.attrs.vocab.learned
    ? `<button class="btn btn-gold btn-big full" data-act="learn-vocab">${bs.attrs.vocab.tries ? L("retryLesson") : L("discover10")}</button>
       <div class="need-hint center">${L("needPct", Math.round(passNeed(bs.attrs.vocab) * 100), bs.attrs.vocab.tries || 0)}</div>`
    : `<div class="solid"><div class="big" style="color:${retColor(sol)}">${Math.round(sol * 100)}%</div>
        <div><div>${L("solidity")}</div><div class="p-sub">${L("production", (brickRate(b) * 60).toFixed(1))}</div></div></div>
       <button class="btn btn-good btn-big full" data-act="review-brick">${L("reviewBrick")}</button>`;

  const attrs = ATTRS.map((at) => {
    const a = bs.attrs[at.id], nm = attrName(at.id);
    const topRow = (extra = "") => `<div class="attr-top"><span class="attr-ico">${at.icon}</span><span class="attr-name">${nm}</span>${extra}</div>`;
    if (!a) {
      const why = attrLockReason(b, at), cost = attrCost(b, at);
      return `<div class="attr off ${why ? "locked" : "can"}">${topRow()}<div class="attr-desc">${attrDesc(at.id)}</div>
        <div class="attr-actions">${why ? `<span class="lockwhy">🔒 ${why}</span>` :
          `<span class="p-sub">${L("strengthens")}</span><button class="btn btn-gold" data-act="graft" data-attr="${at.id}" ${S.savoir >= cost ? "" : "disabled"}>${L("graftFor", cost)}</button>`}</div></div>`;
    }
    if (!a.learned) {
      return `<div class="attr">${topRow(`<span class="newbadge static">${L("toLearnBadge")}</span>`)}<div class="attr-desc">${attrDesc(at.id)}</div>
        <div class="need-hint">${L("needPct", Math.round(passNeed(a) * 100), a.tries || 0)}</div>
        <div class="attr-actions"><span></span><button class="btn btn-gold" data-act="learn-attr" data-attr="${at.id}">${a.tries ? L("retryLesson") : L("firstLesson")}</button></div></div>`;
    }
    const r = ret(a), left = a.last + a.hl - Date.now();
    const st = stars(a), pct = Math.round(r * 100);
    return `<div class="attr">${topRow(`<span class="deep" title="${esc(L("starsTip"))}"><small>${L("deepMem")}</small><span class="stars">${starStr(st)}</span></span>`)}
      <div class="bar"><div style="width:${r * 100}%;background:${retColor(r)}"></div></div>
      <div class="attr-info"><span>${L("strengthPct", pct)}</span><span>${left > 0 ? L("erodesIn", fmtDur(left)) : L("eroded")}</span></div>
      <div class="attr-actions"><div class="prod"><span class="p-sub">💡 +${(attrBaseRate(b, at.id, a) * r * 60).toFixed(1)} /min</span>
          <span class="prod-calc">${L("memCalc", pct, `<span class="stars sm">${"★".repeat(st) || "–"}</span>`)}
          <button class="mem-i" data-act="mem-info" data-attr="${at.id}" title="${esc(L("memInfoTip"))}" aria-label="${esc(L("memInfoTip"))}">i</button></span></div>
        <button class="btn" data-act="train" data-attr="${at.id}">${L("train")}</button></div></div>`;
  }).join("");

  const words = bs.attrs.vocab.learned
    ? b.w.map((w, i) => `<div class="word" data-act="say" data-i="${i}" title="${esc(L("listen"))}"><div class="tg">🔈 ${w.tg} ${gtag(w)}</div><div class="nat">${w.nat}</div></div>`).join("")
    : hidden;
  return head + top + `<div class="p-section"><h4>${L("attrs")}</h4>${attrs}</div>
    <div class="p-section"><h4>${L("words")}</h4><div class="words">${words}</div></div>`;
}

// Fenêtre « Les deux mémoires » (le petit i sous la production)
function memoryInfoModal(b, aid) {
  const a = S.bricks[b.id].attrs[aid], st = stars(a), r = ret(a);
  const tbl = (head, rows) => `<table class="mem-table"><tr><th>${head[0]}</th><th>${head[1]}</th></tr>${rows.map(([x, y, on]) =>
    `<tr class="${on ? "on" : ""}"><td>${x}</td><td>${y}</td></tr>`).join("")}</table>`;
  const starRows = STAR_HL.map((h, i) => [`<span class="stars">${"★".repeat(i + 1)}</span>`, fmtDur(h), i + 1 === st]);
  const multRows = [[1, "1,05"], [0.5, "1,95"], [0, "2,85"]].map(([R, m]) =>
    [`${Math.round(R * 100)} %`, "×" + (UI === "fr" ? m : m.replace(",", ".")), false]);
  const next = STAR_HL[st];
  openModal(`<div class="m-head"><div class="m-tag grow">${L("memTitle")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body mem-info">
      <div class="mem-this">${L("memThis", AT[aid].icon, attrName(aid), Math.round(r * 100), `<span class="stars">${"★".repeat(st) || "–"}</span>`, fmtDur(a.hl))}
        <div class="p-sub">${next ? L("memNext", fmtDur(next)) : L("memMax")}</div></div>
      ${L("memBody", tbl(L("memStarsHead"), starRows), tbl(L("memMultHead"), multRows))}
    </div>
    <div class="m-foot"><div class="fb"></div><button class="btn btn-gold btn-big" data-x2>${L("gotIt")}</button></div>`);
  $("#modal [data-x]").onclick = closeModal; $("#modal [data-x2]").onclick = closeModal;
  KEY = (e) => { if (e.key === "Enter") closeModal(); };
}

function renderAll() { if (!S) return; renderTop(); renderSkills(); renderTree(); renderPanel(); }

// ---------- Toasts ----------
// Sur petit écran, les notifications attendent la fermeture de la fenêtre pour ne rien masquer
let PENDING_TOASTS = [];
function toast(html, cls = "") {
  if (isNarrow() && !$("#overlay").classList.contains("hidden")) { PENDING_TOASTS.push([html, cls]); return; }
  const t = document.createElement("div");
  t.className = "toast " + cls; t.innerHTML = html;
  const box = $("#toasts");
  box.appendChild(t);
  while (box.children.length > (isNarrow() ? 2 : 4)) box.firstChild.remove();
  setTimeout(() => { t.style.transition = "opacity .4s"; t.style.opacity = 0; setTimeout(() => t.remove(), 400); }, 4200);
}

// ---------- Fenêtre modale ----------
let KEY = null; // gestionnaire clavier actif
function openModal(html, cls = "") {
  if (!/\bfriends\b/.test(cls) && typeof FV !== "undefined") FV = null;   // la fenêtre Amis n'est plus affichée
  $("#modal").className = cls; $("#modal").innerHTML = html;
  $("#overlay").classList.remove("hidden"); $("#modal").scrollTop = 0;
}
function closeModal() {
  $("#overlay").classList.add("hidden"); $("#modal").innerHTML = ""; KEY = null; SES = null; FV = null;
  if (HAS_TTS) speechSynthesis.cancel();
  save();
  if (S) renderAll();
  if (!$("#screen").classList.contains("hidden")) renderProfiles();
  const pend = PENDING_TOASTS.slice(-2); PENDING_TOASTS = [];
  pend.forEach(([h, c]) => toast(h, c));
}

// Diaporama générique (intro, leçons)
function slides(list, { icon = "", finalLabel, onEnd = closeModal, title = "", lang = UI } = {}) {
  let i = 0;
  finalLabel = finalLabel || tr(lang, "letsGo");
  const draw = () => {
    const last = i === list.length - 1;
    openModal(`<div class="m-head"><div class="m-tag grow">${title}</div><button class="m-close" data-x>✕</button></div>
      <div class="m-body"><div class="lesson-ico">${icon}</div><div class="lesson-slide"><div>${list[i]}</div></div>
      <div class="dots">${list.map((_, k) => `<span class="${k <= i ? "on" : ""}"></span>`).join("")}</div></div>
      <div class="m-foot"><button class="btn btn-ghost" data-prev ${i ? "" : "disabled"}>${tr(lang, "back")}</button><div class="fb"></div>
      <button class="btn ${last ? "btn-gold" : "btn-good"} btn-big" data-next>${last ? finalLabel : tr(lang, "next")}</button></div>`);
    $("#modal [data-x]").onclick = closeModal;
    $("#modal [data-prev]").onclick = () => { i--; draw(); };
    $("#modal [data-next]").onclick = next;
  };
  const next = () => { if (i < list.length - 1) { i++; draw(); } else onEnd(); };
  KEY = (e) => { if (e.key === "Enter" || e.key === "ArrowRight") next(); else if (e.key === "ArrowLeft" && i) { i--; draw(); } };
  draw();
}

// Fenêtre « danger » : gros avertissement + compte à rebours avant de pouvoir confirmer
function dangerModal({ lang, title, intro, items, outro, onConfirm }) {
  openModal(`<div class="m-head"><div class="m-tag grow" style="color:var(--bad)">${tr(lang, "danger")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body danger-zone"><div class="warn-ico">⚠️</div>
      <div class="warn-title">${title}</div>
      <div class="warn-text">${intro}</div>
      <ul class="warn-list">${items.map((x) => `<li>${x}</li>`).join("")}</ul>
      <div class="warn-text">${tr(lang, "noBackup")}</div>
      ${outro ? `<div class="warn-text p-sub">${outro}</div>` : ""}</div>
    <div class="m-foot"><button class="btn btn-good btn-big" data-cancel>${tr(lang, "keep")}</button><div class="fb"></div>
      <button class="btn btn-bad btn-big" data-ok disabled>${tr(lang, "eraseIn", 5)}</button></div>`);
  const ok = $("#modal [data-ok]");
  $("#modal [data-x]").onclick = closeModal;
  $("#modal [data-cancel]").onclick = closeModal;
  let n = 5;
  const tick = setInterval(() => {
    if (!document.body.contains(ok)) return clearInterval(tick);
    n--;
    if (n > 0) ok.textContent = tr(lang, "eraseIn", n);
    else { clearInterval(tick); ok.disabled = false; ok.textContent = tr(lang, "eraseNow"); }
  }, 1000);
  ok.onclick = onConfirm;
  KEY = (e) => { if (e.key === "Enter") closeModal(); }; // Entrée = choix prudent
}

// ---------- Flux : briques, attributs, compétences ----------
function unlockBrick(b) {
  if (!brickReqMet(b) || !spend(brickCost(b))) return;
  S.bricks[b.id] = newBrickState(b); S.started = true;
  SFX.unlock(); toast(L("brickUnlocked", b.icon, b.name));
  save(); renderAll(); openDiscovery(b);
}

function openDiscovery(b) {
  let i = 0;
  const draw = () => {
    const w = b.w[i], last = i === b.w.length - 1;
    openModal(`<div class="m-head"><div class="m-tag grow">${L("discovery", b.icon, b.name)}</div><button class="m-close" data-x>✕</button></div>
      <div class="m-body"><div class="m-instr center">${L("discoveryInstr")}</div>
      <div class="card-word"><div class="big-tg">${w.tg}<button class="speak" data-say>🔈</button></div>
      <div class="big-nat">${w.nat} ${gtag(w)}</div>
      ${w.alts.length > 1 ? `<div class="p-sub" style="margin-top:6px">${L("also", w.alts.slice(1).join(", "))}</div>` : ""}</div>
      <div class="dots">${b.w.map((_, k) => `<span class="${k <= i ? "on" : ""}"></span>`).join("")}</div></div>
      <div class="m-foot"><button class="btn btn-ghost" data-prev ${i ? "" : "disabled"}>${L("back")}</button><div class="fb"></div>
      <button class="btn ${last ? "btn-gold" : "btn-good"} btn-big" data-next>${last ? L("testMe") : L("next")}</button></div>`);
    $("#modal [data-x]").onclick = closeModal;
    $("#modal [data-say]").onclick = () => speak(w.tg);
    $("#modal [data-prev]").onclick = () => { i--; draw(); };
    $("#modal [data-next]").onclick = next;
    speak(w.tg, 150);
  };
  const next = () => {
    if (i < b.w.length - 1) { i++; draw(); }
    else startSession([{ bid: b.id, aid: "vocab", n: 10 }], { title: L("firstTest"), onDone: () => { delete S.bricks[b.id].isNew; } });
  };
  KEY = (e) => { if (e.key === "Enter" || e.key === "ArrowRight") next(); else if (e.key === "ArrowLeft" && i) { i--; draw(); } else if (e.key === " ") speak(b.w[i].tg); };
  draw();
}

function graftAttr(b, at) {
  if (attrLockReason(b, at) || !spend(attrCost(b, at))) return;
  S.bricks[b.id].attrs[at.id] = { learned: false };
  SFX.unlock(); toast(L("attrAdded", at.icon, attrName(at.id), b.icon, b.name));
  save(); renderAll(); openAttrIntro(b, at);
}

function openAttrIntro(b, at) {
  const go = () => startSession([{ bid: b.id, aid: at.id, n: 8 }], { title: L("firstLessonTitle", attrName(at.id)) });
  if (at.id === "vocab") return openDiscovery(b);
  if (at.id === "spell") return slides([L("spellIntro", b.icon, b.name)], { icon: "✍️", title: attrName("spell"), onEnd: go });
  const f = FORM[at.id], s = SK[at.id];
  const ex = shuffle(b.s).slice(0, 2).map((x) => `<i>${x.tg[f]}</i><br><span class="ex-nat">${x.nat[f]}</span>`).join("<br><br>");
  slides([...s.lesson.slice(1), L("examples", b.icon, b.name, ex)], { icon: at.icon, title: L("recap", s.name), onEnd: go });
}

function unlockSkill(s) {
  if (!skillReqMet(s) || S.skills[s.id] || !spend(s.cost)) return;
  S.skills[s.id] = true;
  SFX.unlock(); toast(L("skillLearned", s.icon, s.name, attrName(s.id)), "violet");
  save(); renderAll();
  slides(s.lesson, { icon: s.icon, title: L("lessonTitle", s.name), finalLabel: L("gotIt") });
}

function reviewBrick(b) {
  const bs = S.bricks[b.id], N = 10;
  const list = Object.entries(bs.attrs).filter(([, a]) => a.learned);
  const w = list.map(([, a]) => 1 - ret(a) + 0.25), tot = w.reduce((x, y) => x + y, 0);
  const targets = list.map(([aid], k) => ({ bid: b.id, aid, n: Math.max(2, Math.round((N * w[k]) / tot)) }));
  startSession(targets, { title: L("reviewTitle", b.icon, b.name) });
}

function expressReview() {
  const all = []; eachLearned((b, aid, a) => all.push({ b, aid, r: ret(a) }));
  if (!all.length) return toast(L("learnFirst"));
  all.sort((x, y) => x.r - y.r);
  const top = all.slice(0, 3);
  if (top[0].r > 0.9) toast(L("allSolid"));
  startSession(top.map((x) => ({ bid: x.b.id, aid: x.aid, n: top.length === 1 ? 8 : 4 })), { title: L("expressTitle") });
}

// =====================================================================
//  FAUTES CRÉDIBLES (pièges des QCM et des tuiles)
// =====================================================================
const EN_VERBS = { like: "likes", love: "loves", want: "wants", have: "has", eat: "eats", drink: "drinks",
  go: "goes", see: "sees", play: "plays", read: "reads", say: "says", wear: "wears" };
const EN_VERBS_INV = Object.fromEntries(Object.entries(EN_VERBS).map(([a, b]) => [b, a]));
const EN_SW = { "don't": ["doesn't"], "doesn't": ["don't"], do: ["does"], does: ["do"], is: ["are", "am"], are: ["is"], am: ["is", "are"] };

function corruptEN(sent, f) {
  const t = tok(sent.tg[f]), out = new Set(), add = (c) => out.add(c.join(" "));
  t.forEach((w, i) => {
    const reps = EN_SW[w] || (EN_VERBS[w] ? [EN_VERBS[w]] : EN_VERBS_INV[w] ? [EN_VERBS_INV[w]] : []);
    reps.forEach((r) => { const c = [...t]; c[i] = r; add(c); });
  });
  if (f === 0) {
    // Oublier « be » (The sky blue) ou l'ajouter devant un verbe (He is plays)
    const b = t.findIndex((w) => ["is", "are", "am"].includes(w));
    if (b >= 0) add(t.filter((_, k) => k !== b));
    const v = t.findIndex((w) => EN_VERBS[w] || EN_VERBS_INV[w]);
    if (v > 0 && b < 0) { const c = [...t]; c.splice(v, 0, t[v - 1] === "I" ? "am" : EN_VERBS_INV[t[v]] ? "is" : "are"); add(c); }
  }
  if (f === 1) {
    const i = t.findIndex((w) => w === "don't" || w === "doesn't");
    if (i >= 0) { const c = [...t]; c[i] = "not"; add(c); }
    const j = t.indexOf("not");
    if (j > 0) { const c = [...t]; [c[j - 1], c[j]] = [c[j], c[j - 1]]; add(c); }
  }
  if (f === 2) {
    if (t[0] === "do" || t[0] === "does") add(t.slice(1));
    if (["is", "are", "am"].includes(t[0])) {
      const n = ["the", "my", "your", "a", "an"].includes(t[1]) ? 2 : 1;
      add([...t.slice(1, 1 + n), t[0], ...t.slice(1 + n)]);
    }
  }
  out.delete(t.join(" "));
  return [...out];
}

// Familles de formes françaises : remplacer une forme par une autre de la même famille donne toujours une faute
const FR_VERB_FAMS = [
  ["suis", "es", "est", "sommes", "êtes", "sont"], ["ai", "as", "a", "avons", "avez", "ont"],
  ["aime", "aimes", "aimons", "aimez", "aiment"], ["veux", "veut", "voulons", "voulez", "veulent"],
  ["vais", "vas", "va", "allons", "allez", "vont"], ["mange", "manges", "mangeons", "mangez", "mangent"],
  ["bois", "boit", "buvons", "buvez", "boivent"], ["vois", "voit", "voyons", "voyez", "voient"],
  ["joue", "joues", "jouons", "jouez", "jouent"], ["lis", "lit", "lisons", "lisez", "lisent"],
  ["dis", "dit", "disons", "dites", "disent"], ["porte", "portes", "portons", "portez", "portent"],
  ["fais", "fait", "faisons", "faites", "font"],
];
const FR_OTHER_FAMS = [
  ["le", "la", "les"], ["un", "une", "des"], ["mon", "ma", "mes"], ["ton", "ta", "tes"], ["du", "des"],
  ["noir", "noire", "noirs", "noires"], ["blanc", "blanche", "blancs", "blanches"], ["vert", "verte", "verts", "vertes"],
  ["bleu", "bleue", "bleus", "bleues"], ["gris", "grise", "grises"], ["rouge", "rouges"], ["rose", "roses"], ["jaune", "jaunes"],
  ["grand", "grande", "grands", "grandes"], ["petit", "petite", "petits", "petites"], ["bon", "bonne", "bons", "bonnes"],
  ["chaud", "chaude", "chauds", "chaudes"], ["froid", "froide", "froids", "froides"], ["neuf", "neuve", "neufs", "neuves"],
  ["nouveau", "nouvelle", "nouveaux", "nouvelles"], ["long", "longue", "longs", "longues"], ["triste", "tristes"],
];
const FR_FAM = {}, FR_IS_VERB = new Set();
FR_VERB_FAMS.forEach((f) => { FR_IS_VERB.add(f); f.forEach((w) => { FR_FAM[w] = FR_FAM[w] || f; }); });
FR_OTHER_FAMS.forEach((f) => f.forEach((w) => { FR_FAM[w] = FR_FAM[w] || f; }));
const FR_DET = new Set(["le", "la", "les", "l'", "un", "une", "des", "mon", "ma", "mes", "ton", "ta", "tes", "du", "de", "sur", "au", "à"]);
const FR_ELIDE = { "j'": "je", "l'": "le", "n'": "ne", "d'": "de", "c'": "ce", "qu'": "que" };
const VOWEL = /^[aeiouyhéèêëàâîïôûù]/;

function corruptFR(sent, f) {
  const t = tok(sent.tg[f]), out = new Set(), add = (c) => out.add(c.join(" "));
  t.forEach((w, i) => {
    const m = w.match(/^(j'|l'|n'|d'|c'|qu')(.+)$/);
    const pre = m ? m[1] : "", core = m ? m[2] : w;
    const fam = FR_FAM[core];
    // « porte », « lit »… sont aussi des noms : pas de conjugaison après un article
    if (fam && !(FR_IS_VERB.has(fam) && i > 0 && FR_DET.has(t[i - 1])) && (!pre || pre === "j'" || pre === "n'")) {
      fam.filter((x) => x !== core && (!pre || VOWEL.test(x))).forEach((x) => { const c = [...t]; c[i] = pre + x; add(c); });
    }
    if (pre) { const c = [...t]; c.splice(i, 1, FR_ELIDE[pre], core); add(c); }   // oubli de l'élision
  });
  if (f === 1) {
    add(t.filter((w) => w !== "pas"));                                            // « ne » sans « pas »
    const j = t.indexOf("pas");
    if (j >= 1) {                                                                 // « pas » mal placé
      const v = t[j - 1];
      if (v.startsWith("n'")) add([...t.slice(0, j - 1), "ne", "pas", v.slice(2), ...t.slice(j + 1)]);
      else if (t[j - 2] === "ne") { const c = [...t]; [c[j - 1], c[j]] = [c[j], c[j - 1]]; add(c); }
    }
  }
  if (f === 2 && t[0] === "est-ce") {
    if (t[1] === "que") add([t[0], ...t.slice(2)]);
    else if (t[1] && t[1].startsWith("qu'")) add([t[0], t[1].slice(3), ...t.slice(2)]);
  }
  out.delete(t.join(" "));
  return [...out];
}
const corruptions = (sent, f) => (COURSE.target === "fr" ? corruptFR(sent, f) : corruptEN(sent, f));

// =====================================================================
//  GÉNÉRATION DES QUESTIONS
// =====================================================================
function pickWeighted(weights, used) {
  let idx = weights.map((_, i) => i).filter((i) => !used.has(i));
  if (!idx.length) { used.clear(); idx = weights.map((_, i) => i); }
  const tot = idx.reduce((s, i) => s + weights[i], 0);
  let r = Math.random() * tot;
  for (const i of idx) { r -= weights[i]; if (r <= 0) { used.add(i); return i; } }
  used.add(idx[idx.length - 1]); return idx[idx.length - 1];
}
function distractWords(b, i, key, n = 3) {
  return shuffle(b.w.map((_, k) => k).filter((k) => k !== i)).slice(0, n).map((k) => b.w[k][key]);
}
// Sépare l'article d'un nom français : « une maison » -> ["une ", "maison"]
function splitArticle(w) {
  if (COURSE.target !== "fr") return ["", w];
  const m = w.match(/^(un |une |le |la |les |l')(.+)$/);
  return m ? [m[1], m[2]] : ["", w];
}
const hintOf = (s) => s.split("").map((c) => (/\s/.test(c) ? "  " : /\p{L}/u.test(c) ? "_" : c)).join(" ");

const wordWeights = (b) => (S.bricks[b.id] ? S.bricks[b.id].werr : b.w.map(() => 1));
function genVocab(b, used) {
  const i = pickWeighted(wordWeights(b), used), w = b.w[i];
  const types = ["tg_nat", "nat_tg"]; if (HAS_TTS && sound()) types.push("listen");
  const t = pick(types);
  if (t === "tg_nat") {
    const opts = shuffle([w.nat, ...distractWords(b, i, "nat")]);
    return { kind: "mcq", tag: L("tagVocab"), instr: L("qMeaning"), prompt: w.tg, say: w.tg, autoSay: true,
      options: opts, correct: opts.indexOf(w.nat), solution: `${w.tg} = ${w.nat}`, wi: i };
  }
  if (t === "nat_tg") {
    const opts = shuffle([w.tg, ...distractWords(b, i, "tg")]);
    return { kind: "mcq", tag: L("tagVocab"), instr: L("qHowSay"), prompt: w.nat,
      options: opts, correct: opts.indexOf(w.tg), solution: `${w.nat} = ${w.tg}`, sayAfter: w.tg, wi: i };
  }
  const opts = shuffle([w.tg, ...distractWords(b, i, "tg")]);
  return { kind: "mcq", listen: true, tag: L("tagListen"), instr: L("qListen"), say: w.tg, autoSay: true,
    options: opts, correct: opts.indexOf(w.tg), solution: `${w.tg} = ${w.nat}`, wi: i };
}

function genSpell(b, used) {
  const i = pickWeighted(wordWeights(b), used), w = b.w[i];
  const [art, core] = splitArticle(w.tg);
  const canAna = !/[\s'-]/.test(core) && core.length >= 3 && core.length <= 9;
  if (canAna && Math.random() < 0.35) {
    const letters = core.split("");
    let mix; do { mix = shuffle(letters); } while (mix.join("") === core && new Set(letters).size > 1);
    return { kind: "tiles", letters: true, prefix: art.trim(), tag: L("tagSpell"), instr: L("qAnagram"), prompt: w.nat,
      target: letters, bank: mix, solution: `${w.nat} = ${w.tg}`, sayAfter: w.tg, wi: i };
  }
  const hint = art ? `<span class="art-hint">${L("articleHint")}</span> ${hintOf(core)}` : hintOf(w.tg);
  return { kind: "type", tag: L("tagSpell"), instr: L("qType"), prompt: w.nat, say: w.tg,
    accept: w.alts, hint, solution: `${w.nat} = ${w.alts.join(" / ")}`, sayAfter: w.tg, wi: i };
}

function genSentence(b, aid, used, st) {
  const f = FORM[aid], si = pickWeighted(b.s.map(() => 1), used), sent = b.s[si];
  const tg = sent.tg[f], nat = sent.nat[f], target = tok(tg), suf = suffix(tg);
  const bad = corruptions(sent, f);
  const types = ["build", "build"];
  if (bad.length >= 2 && st < 3) types.push("mcq");
  if (f > 0) types.push("transform");
  const t = pick(types), tag = L("tagSentence", f);
  if (t === "mcq") {
    const opts = shuffle([tg, ...shuffle(bad).slice(0, 2).map((x) => show(x.split(" "), suf))]);
    return { kind: "mcq", col: true, tag, instr: L("qChoose"), prompt: nat, sentence: true,
      options: opts, correct: opts.indexOf(tg), solution: tg, sayAfter: tg };
  }
  // Jetons pièges : ceux qui apparaissent dans les fautes typiques
  const pool = new Set();
  bad.forEach((x) => x.split(" ").forEach((w) => { if (!target.includes(w)) pool.add(w); }));
  let extra = shuffle([...pool]).slice(0, 2);
  if (!extra.length) extra = [splitArticle(pick(b.w).tg)[1].toLowerCase()];
  const bank = shuffle([...target, ...extra]);
  if (t === "transform") {
    return { kind: "tiles", tag, instr: L("qTransform", f), prompt: sent.tg[0], say: sent.tg[0],
      sentence: true, target, bank, solution: tg, sayAfter: tg, sub: nat };
  }
  return { kind: "tiles", tag, instr: L("qTranslate"), prompt: nat, sentence: true, target, bank, solution: tg, sayAfter: tg };
}

function genQuestion(t, used) {
  const b = BR[t.bid], a = S.bricks[t.bid].attrs[t.aid];
  const q = t.aid === "vocab" ? genVocab(b, used) : t.aid === "spell" ? genSpell(b, used) : genSentence(b, t.aid, used, stars(a));
  q.bid = t.bid; q.aid = t.aid; q.key = t.bid + ":" + t.aid;
  return q;
}

// Correction d'une réponse tapée : exacte, presque (accents, article, faute de frappe) ou fausse
function normT(s) {
  return s.toLowerCase().replace(/[’`´]/g, "'").replace(/\s*'\s*/g, "'").replace(/œ/g, "oe").replace(/æ/g, "ae")
    .replace(/\s*[.!?]+$/, "").replace(/\s+/g, " ").trim();
}
const noAcc = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
const bare = (s) => s.replace(/^(un|une|le|la|les) /, "").replace(/^l'/, "");
function gradeTyped(input, accept) {
  const g = normT(input), acc = accept.map(normT);
  if (acc.includes(g)) return { credit: 1 };
  if (COURSE.target === "fr") {
    if (acc.some((a) => noAcc(a) === noAcc(g))) return { credit: 0.5, why: "almostAccent" };
    if (acc.some((a) => bare(a) !== a && noAcc(bare(a)) === noAcc(bare(g)))) return { credit: 0.5, why: "almostArticle" };
  }
  if (acc.some((a) => a.length >= 4 && lev(a, g) <= 1)) return { credit: 0.5, why: "almostTypo" };
  return { credit: 0 };
}

// =====================================================================
//  SESSION D'EXERCICES
// =====================================================================
let SES = null;

function startSession(targets, opts = {}) {
  const per = {};
  let qs = [];
  targets.forEach((t) => {
    const key = t.bid + ":" + t.aid, a = S.bricks[t.bid].attrs[t.aid];
    per[key] = { ...t, ok: 0, tot: 0, rBefore: ret(a), hlBefore: a.learned ? a.hl : 0, starsBefore: stars(a), wasLearned: !!a.learned };
    const used = new Set();
    for (let k = 0; k < t.n; k++) qs.push(genQuestion(t, used));
  });
  if (targets.length > 1) qs = shuffle(qs);
  SES = { targets, opts, per, qs, i: 0, combo: 0, maxCombo: 0, gained: 0, firstTotal: qs.length, perfect: true };
  renderQ();
}

function renderQ() {
  const q = SES.qs[SES.i];
  SES.answered = false; SES.sel = [];
  const head = `<div class="m-head"><button class="m-close" data-x title="${esc(L("quit"))}">✕</button>
    <div class="progress"><div style="width:${(SES.i / SES.qs.length) * 100}%"></div></div>
    ${SES.boss ? bossHeadHtml() : ""}<div class="combo" id="combo">${SES.combo >= 2 ? `🔥 x${SES.combo}` : ""}</div></div>`;
  const spk = q.say ? `<button class="speak" data-say title="${esc(L("listen"))}">🔈</button>` : "";
  let body = `<div class="m-tag">${q.tag}${q.retry ? " · " + L("retry") : ""}</div><div class="m-instr">${q.instr}</div>`;
  if (q.listen) body += `<div class="listen-wrap"><button class="speak huge" data-say>🔊</button>
    ${q.slow ? `<button class="btn slow-btn" data-slow>🐢 ${L("slow")}</button>` : ""}</div>`;
  else body += `<div class="m-prompt ${q.sentence ? "sentence" : ""}">${q.prompt}${spk}</div>`;
  if (q.sub) body += `<div class="p-sub sub-line">(${q.sub})</div>`;

  const hint = IS_TOUCH ? (q.kind === "mcq" ? L("hintTap") : "") : q.kind === "mcq" ? L("hintMcq") : L("hintEnter");
  let foot = `<div class="fb"><span class="p-sub key-hint">${hint}</span></div>`;
  if (q.kind === "mcq") {
    body += `<div class="choices ${q.col ? "col" : ""}">${q.options.map((o, k) => `<button class="choice" data-c="${k}"><span class="k">${k + 1}</span><span>${o}</span></button>`).join("")}</div>`;
  } else if (q.kind === "type" || q.kind === "write") {
    body += `<input class="type-in ${q.kind === "write" ? "write" : ""}" id="type-in" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(q.kind === "write" ? L("writePh") : L("typePh"))}" lang="${COURSE.target}">
      ${q.hint ? `<div class="hint">${q.hint}</div>` : ""}
      ${COURSE.target === "fr" ? `<div class="accents">${ACCENTS.map((c) => `<button class="acc" data-acc="${c}">${c}</button>`).join("")}</div>` : ""}`;
    foot += `<button class="btn btn-ghost" data-skip>${L("dontKnow")}</button><button class="btn btn-good btn-big" data-check>${L("check")}</button>`;
  } else {
    SES.bank = q.bank.map((t, id) => ({ t, id }));
    body += `<div class="answer-line" id="ans"></div><div class="bank" id="bank"></div>`;
    foot += `<button class="btn btn-ghost" data-skip>${L("dontKnow")}</button><button class="btn btn-good btn-big" data-check disabled>${L("check")}</button>`;
  }
  openModal(head + `<div class="m-body">${body}</div><div class="m-foot" id="foot">${foot}</div>`, SES.boss ? "session boss-modal" : "session");

  $("#modal [data-x]").onclick = quitSession;
  $$("#modal [data-say]").forEach((el) => (el.onclick = () => speak(q.say)));
  const slowBtn = $("#modal [data-slow]"); if (slowBtn) slowBtn.onclick = () => speak(q.say, 0, 0.55);
  if (q.autoSay) speak(q.say, 200);
  if (q.kind === "mcq") $$("#modal [data-c]").forEach((el) => (el.onclick = () => answer(+el.dataset.c)));
  if (q.kind === "type" || q.kind === "write") {
    const inp = $("#type-in");
    if (!IS_TOUCH) setTimeout(() => inp.focus(), 50);
    $$("#modal [data-acc]").forEach((el) => {
      el.onpointerdown = (e) => e.preventDefault();           // garde le clavier ouvert sur mobile
      el.onclick = () => {
        const s = inp.selectionStart ?? inp.value.length, e2 = inp.selectionEnd ?? inp.value.length;
        inp.value = inp.value.slice(0, s) + el.dataset.acc + inp.value.slice(e2);
        inp.focus(); inp.setSelectionRange(s + 1, s + 1);
      };
    });
  }
  if (q.kind === "tiles") drawTiles();
  const chk = $("#modal [data-check]"); if (chk) chk.onclick = () => answer();
  const skp = $("#modal [data-skip]"); if (skp) skp.onclick = () => answer(null, true);

  KEY = (e) => {
    if (SES.answered) { if (e.key === "Enter") nextQ(); return; }
    if (q.kind === "mcq" && /^[1-4]$/.test(e.key) && +e.key <= q.options.length) answer(+e.key - 1);
    else if (e.key === "Enter") { if (q.kind === "type" || q.kind === "write" || SES.sel.length) answer(); }
    else if (q.kind === "tiles" && e.key === "Backspace" && SES.sel.length) { SES.sel.pop(); drawTiles(); }
  };
}

function drawTiles() {
  const q = SES.qs[SES.i];
  const byId = Object.fromEntries(SES.bank.map((x) => [x.id, x]));
  $("#ans").innerHTML = (q.prefix ? `<span class="tile fixed">${q.prefix}</span>` : "")
    + SES.sel.map((id) => `<button class="tile" data-un="${id}">${byId[id].t}</button>`).join("");
  $("#bank").innerHTML = SES.bank.map((x) => `<button class="tile ${SES.sel.includes(x.id) ? "ghost" : ""}" data-pick="${x.id}">${x.t}</button>`).join("");
  $$("#modal [data-pick]").forEach((el) => (el.onclick = () => {
    if (SES.answered) return; SES.sel.push(+el.dataset.pick); drawTiles();
    if (!q.letters) speak(byId[+el.dataset.pick].t);
  }));
  $$("#modal [data-un]").forEach((el) => (el.onclick = () => {
    if (SES.answered) return; SES.sel = SES.sel.filter((id) => id !== +el.dataset.un); drawTiles();
  }));
  const chk = $("#modal [data-check]"); if (chk) chk.disabled = !SES.sel.length;
}

function answer(choice, skipped = false) {
  if (SES.answered) return;
  const q = SES.qs[SES.i];
  let credit = 0, why = null;
  if (skipped) credit = 0;
  else if (q.kind === "mcq") credit = choice === q.correct ? 1 : 0;
  else if (q.kind === "type") {
    const given = $("#type-in").value;
    if (!normT(given)) return;
    ({ credit, why = null } = gradeTyped(given, q.accept));
  } else if (q.kind === "write") {
    const given = $("#type-in").value;
    if (!given.trim()) return;
    ({ credit, why = null } = gradeSentence(given, q.accept));
  } else {
    const byId = Object.fromEntries(SES.bank.map((x) => [x.id, x.t]));
    const sep = q.letters ? "" : " ";
    credit = SES.sel.map((id) => byId[id]).join(sep) === q.target.join(sep) ? 1 : 0;
  }
  SES.answered = true;
  const per = SES.per[q.key], b = BR[q.bid];

  // Statistiques par mot (pour revoir plus souvent les mots ratés)
  if (q.wi !== undefined && S.bricks[q.bid]) {
    const we = S.bricks[q.bid].werr;
    we[q.wi] = credit === 1 ? Math.max(1, we[q.wi] * 0.6) : we[q.wi] + 2;
  }
  if (!q.retry) { per.tot++; per.ok += credit; S.stats.answers++; }
  if (credit < 1) SES.perfect = false;

  let gain = 0;
  if (credit > 0) {
    if (credit === 1) SES.combo++;
    SES.maxCombo = Math.max(SES.maxCombo, SES.combo);
    const repair = 1 + (per.wasLearned ? 1 - per.rBefore : 0);
    gain = 2 * ATTR_WEIGHT[q.aid] * (1 + b.tier * 0.25) * (1 + Math.min(SES.combo, 20) * 0.05) * repair * credit * (q.retry ? 0.5 : 1);
    gain = Math.max(1, Math.round(gain));
    S.savoir += gain; S.earned += gain; SES.gained += gain;
    if (!q.retry) S.stats.correct += credit;
    if (credit === 1) addXP(1);
  } else {
    SES.combo = 0;
    if (!q.retry && !SES.boss) SES.qs.push({ ...q, retry: true }); // on reverra la question à la fin (pas pendant le boss)
  }

  if (q.kind === "mcq") {
    $$("#modal [data-c]").forEach((el, k) => {
      el.disabled = true;
      if (k === q.correct) el.classList.add("right"); else if (k === choice) el.classList.add("wrong");
    });
  }
  if (q.kind === "type" || q.kind === "write") { $("#type-in").disabled = true; $$("#modal [data-acc]").forEach((el) => (el.disabled = true)); }

  const combo = $("#combo");
  combo.textContent = SES.combo >= 2 ? `🔥 x${SES.combo}` : "";
  if (credit === 1 && SES.combo >= 2) { combo.classList.add("bump"); setTimeout(() => combo.classList.remove("bump"), 200); }

  let title, cls;
  if (credit === 1) {
    cls = "ok"; title = pick(L("praise"));
    if (SES.combo > 0 && SES.combo % 5 === 0) { title = L("combo", SES.combo); SFX.combo(); } else SFX.ok();
  } else if (credit > 0) { cls = "mid"; title = L(why || "almostTypo"); SFX.ok(); }
  else { cls = "ko"; title = skipped ? L("skipped") : L("wrong"); SFX.ko(); $("#modal .m-body").classList.add("shake"); }
  const foot = $("#foot");
  foot.className = "m-foot " + cls;
  foot.innerHTML = `<div class="fb"><div class="fb-title">${title}${gain ? `<span class="fb-gain">+${gain} 💡</span>` : ""}</div>
    <div class="fb-sol">${credit === 1 ? q.solution : L("answerIs", q.solution)}</div></div>
    <button class="btn ${cls === "ko" ? "btn-bad" : "btn-good"} btn-big" data-next>${L("cont")}</button>`;
  $("#modal [data-next]").onclick = nextQ;
  if (!IS_TOUCH) $("#modal [data-next]").focus();
  if (q.sayAfter || q.say) speak(q.sayAfter || q.say, 250);
  renderTop();
}

function nextQ() { SES.i++; if (SES.i >= SES.qs.length) (SES.boss ? finishBoss() : finishSession()); else renderQ(); }

function quitSession() {
  if (SES && SES.boss) {                      // abandonner le boss compte comme une bataille
    if (SES.i === 0 && !SES.answered) return closeModal();
    if (!confirm(L("bossQuitConfirm"))) return;
    return finishBoss(true);
  }
  if (SES && SES.i > 0 && !confirm(L("quitConfirm"))) return;
  closeModal();
}

function finishSession() {
  const rows = [];
  let bonus = 0;
  if (SES.perfect && SES.firstTotal >= 4) { bonus = Math.round(SES.gained * 0.25); S.savoir += bonus; S.earned += bonus; }
  for (const key in SES.per) {
    const p = SES.per[key]; if (!p.tot) continue;
    const a = S.bricks[p.bid].attrs[p.aid], score = p.ok / p.tot;
    if (!a.learned) {                         // première leçon : il faut atteindre le seuil
      const need = passNeed(a);
      a.tries = (a.tries || 0) + 1;
      if (score + 1e-9 < need) { p.failed = { need, next: passNeed(a), score }; rows.push({ p, a, st: 0 }); continue; }
      delete a.tries;
    }
    applyReview(a, score);
    const st = stars(a);
    if (st > p.starsBefore) toast(L("starUp", BR[p.bid].icon, attrName(p.aid), st));
    rows.push({ p, a, st });
  }
  S.stats.sessions++;
  S.lastActive = Date.now();
  touchStreak();
  const { opts, targets, maxCombo } = SES;
  const tot = Object.values(SES.per).reduce((s, p) => s + p.tot, 0), ok = Object.values(SES.per).reduce((s, p) => s + p.ok, 0);
  const pct = tot ? Math.round((ok / tot) * 100) : 0, gained = SES.gained + bonus;
  if (opts.onDone) opts.onDone();
  save();
  SES = null;

  const failed = rows.filter((r) => r.p.failed);
  const face = failed.length ? "💪" : pct === 100 ? "🏆" : pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪";
  const rowsHtml = rows.map(({ p, a, st }) => {
    const b = BR[p.bid], at = AT[p.aid];
    if (p.failed) {
      return `<div class="res-row failed"><span class="res-ico">${b.icon}</span><div class="r-name">${at.icon} ${attrName(p.aid)} <span class="p-sub">· ${b.name}</span>
        <div class="r-hl">${L("notValidated", Math.round(p.failed.need * 100))}</div></div>
        <div class="r-right"><div><b style="color:var(--bad)">${Math.round(p.failed.score * 100)}%</b> / ${Math.round(p.failed.need * 100)}%</div></div></div>`;
    }
    const before = p.wasLearned ? `${Math.round(p.rBefore * 100)}%` : L("isNew");
    const trend = !p.wasLearned ? "" : a.hl >= p.hlBefore ? `<span class="up">▲</span>` : `<span class="down">▼</span>`;
    return `<div class="res-row"><span class="res-ico">${b.icon}</span><div class="r-name">${at.icon} ${attrName(p.aid)} <span class="p-sub">· ${b.name}</span>
      <div class="r-hl">${trend} ${L("holds", fmtDur(a.hl))}</div></div>
      <div class="r-right"><div>${before} → <b style="color:var(--good)">100%</b></div><div class="stars">${starStr(st)}</div></div></div>`;
  }).join("");
  openModal(`<div class="m-head"><div class="m-tag grow">${L("done", opts.title || L("session"))}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body"><div class="res-head"><div class="res-face">${face}</div><div class="res-score">${pct}%</div>
      <div class="res-sub">${L("firstTry", maxCombo)}</div>
      <div class="res-gain">+${gained} 💡${bonus ? ` <span class="p-sub">${L("perfectBonus", bonus)}</span>` : ""}</div></div>
      ${rowsHtml}<div class="p-sub res-tip">${failed.length ? L("firstFailTip", Math.round(failed[0].p.failed.next * 100)) : pct < 70 ? L("lowScore") : L("goodScore")}</div></div>
    <div class="m-foot"><div class="fb"></div><button class="btn" data-again>${L("again")}</button><button class="btn btn-gold btn-big" data-close>${L("cont")}</button></div>`, "session");
  $("#modal [data-x]").onclick = closeModal;
  $("#modal [data-close]").onclick = closeModal;
  $("#modal [data-again]").onclick = () => startSession(targets, { title: opts.title });
  KEY = (e) => { if (e.key === "Enter") closeModal(); };
  SFX.unlock();
  renderTop();
}

// =====================================================================
//  INTRO, RETOUR, RÉINITIALISATION DU PARCOURS
// =====================================================================
function intro() {
  slides([...L("help"), L("firstFree")], {
    icon: "🧱", title: L("howTo"), finalLabel: L("start"),
    onEnd: () => {
      S.started = true;
      if (!S.bricks.basics) S.bricks.basics = newBrickState(BR.basics);
      save(); renderAll(); SFX.unlock(); openDiscovery(BR.basics);
    },
  });
}

function welcomeBack(dt, gain) {
  const er = erodedList();
  const list = er.slice(0, 5).map(({ b, aid }) => `${b.icon} ${b.name} · ${AT[aid].icon} ${attrName(aid)}`).join("<br>") + (er.length > 5 ? "<br>…" : "");
  slides([L("welcomeBack", fmtDur(dt), fmt(gain)) + (er.length ? L("erodedSince", er.length, list) : L("allSolidBack"))],
    { icon: "⏳", title: L("awayTitle"), finalLabel: er.length ? L("repairNow") : L("cont"), onEnd: er.length ? expressReview : closeModal });
}

function confirmResetPath() {
  dangerModal({
    lang: UI, title: L("resetTitle", PATH_NAMES[COURSE.id][UI]), intro: L("irreversible"),
    items: [L("loseSavoir", fmt(S.savoir)), L("loseBricks", Object.keys(S.bricks).length),
      L("loseSkills", Object.keys(S.skills).length), L("loseRank", S.xp, S.streak.days)],
    outro: L("otherSafe"),
    onConfirm: () => {
      const gen = (S.gen || 0) + 1;
      P.paths[COURSE.id] = Object.assign(freshPath(), { gen }); S = P.paths[COURSE.id];
      SEL = { type: "brick", id: "basics" };
      save(); closeModal(); intro();
    },
  });
}

// =====================================================================
//  PROFILS & PARCOURS
// =====================================================================
function enterProfile(id, path) {
  P = ROOT.profiles[id]; if (!P) return showProfiles();
  ROOT.lastProfile = id;
  path = path || (P.paths[P.lastPath] ? P.lastPath : Object.keys(P.paths)[0]);
  if (!path) return choosePathModal(ROOT.uiLang, (p) => enterProfile(id, p));
  enterPath(path);
}

function enterPath(path) {
  if (S) save();
  COURSE = COURSES[path]; UI = COURSE.ui;
  BRICKS = COURSE.bricks; BR = COURSE.BR; SKILLS = COURSE.SKILLS; SK = COURSE.SK;
  if (!P.paths[path]) P.paths[path] = typeof testFullPath === "function" ? testFullPath(COURSES[path]) : freshPath();
  S = P.paths[path]; P.lastPath = path;
  SEL = { type: "brick", id: "basics" };
  pickVoice();
  // Production pendant l'absence (chaque parcours a son propre compteur)
  const dt = Math.min(OFFLINE_CAP, Date.now() - S.lastTick);
  let gain = 0;
  if (S.started && dt > 2 * MIN) { gain = offlineGain(dt, S.lastTick); S.savoir += gain; S.earned += gain; }
  loop.t = Date.now();
  $("#overlay").classList.add("hidden"); $("#modal").innerHTML = ""; KEY = null; SES = null; PENDING_TOASTS = [];
  $("#screen").classList.add("hidden");
  closeSheet();
  renderStatic(); renderAll(); save();
  $("#tree-wrap").scrollTop = 0; window.scrollTo(0, 0);
  if (Online.pid !== P.id) onlineAttach(); else { updateFriendsBadge(); pushSave(true); }
  if (!S.started) intro();
  else if (gain >= 1) welcomeBack(dt, gain);
}

function showProfiles() {
  if (S) save();
  if (connected()) pushSave(true);
  onlineDetach();
  S = null; P = null; COURSE = null;
  $("#overlay").classList.add("hidden"); KEY = null; SES = null; PENDING_TOASTS = [];
  closeSheet();
  $("#screen").classList.remove("hidden");
  document.title = "BRICKS";
  renderProfiles();
  if (!Object.keys(ROOT.profiles).length) newProfileModal();
}

function pathStats(lang, k, st) {
  const c = COURSES[k];
  return `💡 ${fmt(st.savoir)} · ${st.xp} XP · ${rankInfo(st, c).name}`;
}

function renderProfiles() {
  const PL = ROOT.uiLang, X = (k, ...a) => tr(PL, k, ...a);
  document.documentElement.lang = PL;
  const cards = Object.values(ROOT.profiles).sort((a, b) => a.created - b.created).map((p) => {
    const paths = ["en", "fr"].sort((a, b) => !!p.paths[b] - !!p.paths[a]).map((k) => {
      if (p.paths[k]) return `<button class="ppath" data-pid="${p.id}" data-path="${k}"><span class="pp-flag">${COURSES[k].flag}</span>
        <span class="pp-info"><b>${PATH_NAMES[k][PL]}</b><span>${pathStats(PL, k, p.paths[k])}</span></span></button>`;
      return `<button class="ppath add" data-pid="${p.id}" data-path="${k}" title="${esc(X("addPathTip"))}">${X("addPath", COURSES[k].flag)} <span>${PATH_NAMES[k][PL]}</span></button>`;
    }).join("");
    return `<div class="pcard" data-pid="${p.id}">
      <button class="pedit" data-edit="${p.id}" title="${esc(X("edit"))}">✏️</button>
      <div class="pava">${p.avatar}</div><div class="pname">${esc(p.name)}</div>
      ${p.cloud ? `<div class="pcloud">☁️ ${esc(p.cloud.username)}</div>` : ""}
      <div class="ppaths">${paths}</div></div>`;
  }).join("");
  $("#screen").innerHTML = `<div class="scr">
    <div class="scr-top"><div class="logo">🧱 <span>BRICKS</span></div>
      <div class="lang-toggle"><button data-lang="fr" class="${PL === "fr" ? "on" : ""}">FR</button><button data-lang="en" class="${PL === "en" ? "on" : ""}">EN</button></div></div>
    <h1>${X("whoPlays")}</h1><p class="scr-sub">${X("profilesSub")}</p>
    <div class="profiles">${cards}
      <button class="pcard add" data-new><div class="pava">＋</div><div class="pname">${X("newProfile")}</div></button>
      ${HAS_CLOUD ? `<button class="pcard add" data-restore><div class="pava">☁️</div><div class="pname">${X("restoreCard")}</div></button>` : ""}</div>
    ${typeof installButtonHtml === "function" ? installButtonHtml(PL) : ""}</div>`;
}

function profileForm(PL, p, onSubmit, extraFoot = "") {
  const X = (k, ...a) => tr(PL, k, ...a);
  let avatar = p ? p.avatar : pick(AVATARS);
  openModal(`<div class="m-head"><div class="m-tag grow">${p ? X("editProfile") : X("newProfile")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body">
      <label class="m-instr" for="pname">${X("profileName")}</label>
      <input class="type-in" id="pname" maxlength="20" autocomplete="off" value="${p ? esc(p.name) : ""}">
      <div class="form-err" id="perr"></div>
      <div class="m-instr" style="margin-top:18px">${X("chooseAvatar")}</div>
      <div class="avatars">${AVATARS.map((a) => `<button class="ava ${a === avatar ? "on" : ""}" data-ava="${a}">${a}</button>`).join("")}</div>
      ${extraFoot}
    </div>
    <div class="m-foot"><button class="btn btn-ghost" data-x2>${X("cancel")}</button><div class="fb"></div>
      <button class="btn btn-gold btn-big" data-ok>${p ? X("save") : X("nextStep")}</button></div>`);
  const inp = $("#pname");
  if (!IS_TOUCH) setTimeout(() => inp.focus(), 50);
  $("#modal [data-x]").onclick = closeModal; $("#modal [data-x2]").onclick = closeModal;
  $$("#modal [data-ava]").forEach((el) => (el.onclick = () => {
    avatar = el.dataset.ava; $$("#modal [data-ava]").forEach((x) => x.classList.toggle("on", x === el));
  }));
  const submit = () => {
    const name = inp.value.trim().replace(/\s+/g, " ");
    const err = !name ? X("nameEmpty")
      : Object.values(ROOT.profiles).some((o) => o !== p && o.name.toLowerCase() === name.toLowerCase()) ? X("nameTaken") : null;
    if (err) { $("#perr").textContent = err; inp.classList.add("shake"); setTimeout(() => inp.classList.remove("shake"), 400); return; }
    onSubmit(name, avatar);
  };
  $("#modal [data-ok]").onclick = submit;
  KEY = (e) => { if (e.key === "Enter") submit(); };
}

function newProfileModal() {
  const PL = ROOT.uiLang;
  if (Object.keys(ROOT.profiles).length >= MAX_PROFILES) return toast(tr(PL, "maxProfiles"), "bad");
  profileForm(PL, null, (name, avatar) => choosePathModal(PL, (path) => {
    const id = uid();
    ROOT.profiles[id] = { id, name, avatar, created: Date.now(), settings: { sound: true }, lastPath: path, paths: {} };
    save(); enterProfile(id, path);
  }));
}

function editProfileModal(id) {
  const PL = ROOT.uiLang, p = ROOT.profiles[id];
  profileForm(PL, p, (name, avatar) => { p.name = name; p.avatar = avatar; save(); closeModal(); },
    `<button class="btn btn-ghost danger-link" data-del>${tr(PL, "deleteProfile")}</button>`);
  $("#modal [data-del]").onclick = () => confirmDeleteProfile(id);
}

function confirmDeleteProfile(id) {
  const PL = ROOT.uiLang, p = ROOT.profiles[id];
  const items = Object.entries(p.paths).map(([k, st]) =>
    `${COURSES[k].flag} <b>${PATH_NAMES[k][PL]}</b> — ${pathStats(PL, k, st)} · 🧱 ${Object.keys(st.bricks).length}`);
  dangerModal({
    lang: PL, title: tr(PL, "deleteTitle", p.name), intro: tr(PL, "deleteLose"),
    items: items.length ? items : [tr(PL, "noPath")],
    outro: p.cloud ? tr(PL, "cloudKept") : "",
    onConfirm: () => {
      delete ROOT.profiles[id];
      localStorage.removeItem("bricks-sb-" + id); delete CLIENTS[id];
      if (ROOT.lastProfile === id) ROOT.lastProfile = null;
      save(); closeModal();
    },
  });
}

function choosePathModal(PL, onPick) {
  const X = (k, ...a) => tr(PL, k, ...a);
  openModal(`<div class="m-head"><div class="m-tag grow">${X("choosePath")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body"><p class="m-instr center">${X("choosePathSub")}</p>
      <div class="path-cards">${["en", "fr"].map((k) => `<button class="path-card" data-path="${k}">
        <span class="path-flag">${COURSES[k].flag}</span><span class="path-title">${PATH_CARDS[k].title}</span>
        <span class="path-sub">${PATH_CARDS[k].sub}</span></button>`).join("")}</div></div>`);
  $("#modal [data-x]").onclick = closeModal;
  $$("#modal [data-path]").forEach((el) => (el.onclick = () => onPick(el.dataset.path)));
  KEY = null;
}

// =====================================================================
//  ÉVÉNEMENTS & BOUCLE
// =====================================================================
function bind() {
  $("#tree").addEventListener("click", (e) => {
    if (e.target.closest("[data-boss-info]")) return bossRulesModal();
    if (e.target.closest("[data-boss]")) { SEL = { type: "boss" }; renderAll(); return openSheet(); }
    const n = e.target.closest("[data-brick]"); if (!n) return;
    SEL = { type: "brick", id: n.dataset.brick }; renderAll(); openSheet();
  });
  $("#skills-band").addEventListener("click", (e) => {
    const n = e.target.closest("[data-skill]"); if (!n) return;
    SEL = { type: "skill", id: n.dataset.skill }; renderAll(); openSheet();
  });
  $("#sheet-close").onclick = closeSheet;
  $("#sheet-bg").onclick = closeSheet;
  $("#panel-body").addEventListener("click", (e) => {
    const el = e.target.closest("[data-act]"); if (!el || el.disabled || !S) return;
    const act = el.dataset.act;
    if (SEL.type === "boss") {
      if (act === "boss-info") bossRulesModal();
      if (act === "boss-unlock") unlockBoss();
      if (act === "boss-fight") startBossIntro();
      return;
    }
    if (SEL.type === "skill") {
      const s = SK[SEL.id];
      if (act === "unlock-skill") unlockSkill(s);
      if (act === "lesson") slides(s.lesson, { icon: s.icon, title: L("lessonTitle", s.name), finalLabel: L("gotIt") });
      return;
    }
    const b = BR[SEL.id];
    if (act === "unlock-brick") unlockBrick(b);
    else if (act === "learn-vocab") openDiscovery(b);
    else if (act === "review-brick") reviewBrick(b);
    else if (act === "graft") graftAttr(b, AT[el.dataset.attr]);
    else if (act === "learn-attr") openAttrIntro(b, AT[el.dataset.attr]);
    else if (act === "train") startSession([{ bid: b.id, aid: el.dataset.attr, n: 8 }], { title: L("practiceTitle", attrName(el.dataset.attr)) });
    else if (act === "say") speak(b.w[+el.dataset.i].tg);
    else if (act === "mem-info") memoryInfoModal(b, el.dataset.attr);
  });
  // Écran des profils
  $("#screen").addEventListener("click", (e) => {
    const lang = e.target.closest("[data-lang]");
    if (lang) { ROOT.uiLang = lang.dataset.lang; save(); return renderProfiles(); }
    const ed = e.target.closest("[data-edit]");
    if (ed) return editProfileModal(ed.dataset.edit);
    if (e.target.closest("[data-new]")) return newProfileModal();
    if (e.target.closest("[data-restore]")) return restoreAccountModal();
    const pp = e.target.closest("[data-path]");
    if (pp) return enterProfile(pp.dataset.pid, pp.dataset.path);
    const card = e.target.closest(".pcard[data-pid]");
    if (card) enterProfile(card.dataset.pid);
  });
  document.addEventListener("click", () => { const m = $("#menu"); if (m) m.classList.add("hidden"); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $("#panel").classList.contains("open") && $("#overlay").classList.contains("hidden")) return closeSheet();
    if ($("#overlay").classList.contains("hidden")) return;
    if (e.key === "Escape") { SES ? quitSession() : closeModal(); return; }
    if (e.key === "Enter") e.preventDefault(); // évite le double déclenchement sur un bouton focus
    if (e.repeat) return;
    if (KEY) KEY(e);
  });
  matchMedia("(max-width: 1100px)").addEventListener("change", (e) => { if (!e.matches) closeSheet(); });
  // Jeu ouvert dans plusieurs onglets : on reprend les profils modifiés ailleurs (sauf celui en cours ici)
  window.addEventListener("storage", (e) => {
    if (e.key !== ROOT_KEY || !e.newValue) return;
    try {
      const other = JSON.parse(e.newValue);
      if (!other || !other.profiles) return;
      for (const id in ROOT.profiles) if (!other.profiles[id] && (!P || id !== P.id)) delete ROOT.profiles[id];
      for (const id in other.profiles) if (!P || id !== P.id) ROOT.profiles[id] = other.profiles[id];
      if (!$("#screen").classList.contains("hidden") && $("#overlay").classList.contains("hidden")) renderProfiles();
    } catch (err) { /* données illisibles : on ignore */ }
  });
}

let lastFull = 0, lastSave = 0;
function loop() {
  if (!S) return;
  const now = Date.now(), dt = (now - (loop.t || now)) / 1000; loop.t = now;
  const g = totalRate() * dt; S.savoir += g; S.earned += g;
  renderTop();
  if (now - lastFull > 3000 && $("#overlay").classList.contains("hidden")) { lastFull = now; renderSkills(); renderTree(); renderPanel(); }
  if (now - lastSave > 10000) { lastSave = now; save(); }
}

function init() {
  loadRoot();
  bind();
  const ids = Object.keys(ROOT.profiles);
  if (ids.length === 1) enterProfile(ids[0]);
  else showProfiles();
  handleAuthRedirect();
  setInterval(loop, 250);
  window.addEventListener("beforeunload", save);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { save(); onlineOnHidden(); } else onlineOnVisible();
  });
}
init();
