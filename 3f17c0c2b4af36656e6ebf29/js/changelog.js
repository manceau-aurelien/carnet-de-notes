"use strict";
// =====================================================================
//  BRICKS — historique des mises à jour (la plus récente en premier)
//  Pour une nouvelle version : ajouter une entrée EN HAUT de la liste.
// =====================================================================
const CHANGELOG = [
  {
    date: "2026-11-12", icon: "🎤",
    fr: { title: "L'oral arrive plus tôt", items: [
      "L'attribut <b>🎤 Oral</b> se greffe maintenant juste après ✍️ Orthographe : on parle dès le début !",
      "Nouvel ordre : 📖 → ✍️ → 🎤 → ✅ → 🚫 → ❓. Pour greffer ✅, il faut d'abord avoir validé 🎤 (sauf si ton navigateur ne sait pas écouter).",
      "Nouveaux prix de base : 🎤 25, ✅ 35, 🚫 55 (✍️ 15 et ❓ 80 ne changent pas).",
      "À l'oral, les phrases de la brique n'arrivent qu'aux formes déjà apprises (✅ 🚫 ❓) ; avant, ce sont des phrases du quotidien et des mots.",
      "Ce que tu as déjà greffé ou validé est conservé.",
    ] },
    en: { title: "Speaking comes earlier", items: [
      "The <b>🎤 Speaking</b> upgrade now comes right after ✍️ Spelling: you start talking from the beginning!",
      "New order: 📖 → ✍️ → 🎤 → ✅ → 🚫 → ❓. To add ✅, you first need to pass 🎤 (unless your browser can't listen).",
      "New base prices: 🎤 25, ✅ 35, 🚫 55 (✍️ 15 and ❓ 80 stay the same).",
      "When speaking, the brick's sentences only come in the forms you've already learned (✅ 🚫 ❓); before that, it's everyday phrases and words.",
      "Everything you've already added or passed is kept.",
    ] },
  },
  {
    date: "2026-11-12", icon: "🐉",
    fr: { title: "Le Dragon des Mots t'écoute", items: [
      "L'épreuve du boss contient maintenant <b>3 phrases à dire au micro</b> 🎤, piochées dans tout le programme.",
      "Elles remplacent 3 exercices déjà vus : il y a toujours 20 questions.",
      "Pas de micro ou pas possible de parler ? « 🙊 Pas maintenant » retire ces questions du score, sans pénalité.",
    ] },
    en: { title: "The Word Dragon is listening", items: [
      "The boss trial now includes <b>3 sentences to say out loud</b> 🎤, picked from the whole program.",
      "They replace 3 exercises you've already seen: still 20 questions.",
      "No microphone, or can't speak right now? “🙊 Not now” removes those questions from your score, with no penalty.",
    ] },
  },
  {
    date: "2026-11-11", icon: "🎤",
    fr: { title: "Parle, BRICKS t'écoute", items: [
      "Nouvel attribut <b>🎤 Oral</b>, après ❓ : lis les mots et les phrases à voix haute.",
      "Plus de 120 phrases du quotidien à dire (« Enjoy your meal! », « Where is the bathroom? »…), qui changent à chaque séance.",
      "Le micro vérifie que tu as été compris et montre en rouge les mots qu'il n'a pas reconnus.",
      "3 essais par question ; une prononciation parfaite valide tout de suite.",
      "Pas possible de parler ? « 🙊 Pas maintenant » saute l'exercice sans compter d'erreur.",
      "Fonctionne avec Chrome, Edge et Safari (le navigateur demande l'accès au micro la première fois).",
    ] },
    en: { title: "Speak, BRICKS is listening", items: [
      "New <b>🎤 Speaking</b> upgrade, after ❓: read the words and sentences out loud.",
      "Over 120 everyday phrases to say (“Bon appétit !”, “Où est la salle de bain ?”…), different every session.",
      "The microphone checks you were understood and shows in red the words it didn't recognize.",
      "3 tries per question; a perfect answer passes right away.",
      "Can't speak right now? “🙊 Not now” skips the exercise without counting a mistake.",
      "Works in Chrome, Edge and Safari (the browser asks for microphone access the first time).",
    ] },
  },
  {
    date: "2026-11-11", icon: "🔁",
    fr: { title: "Le rattrapage peut sauver une leçon", items: [
      "Les questions ratées, reposées à la fin de la leçon, comptent maintenant pour valider une première leçon.",
      "Deux façons de valider : au moins <b>70 %</b> du premier coup, ou au moins <b>90 %</b> au total une fois le rattrapage fait.",
      "Cette règle remplace les 80 % demandés aux essais suivants : elle est la même à chaque essai.",
      "En cas d'échec, un petit <b>i</b> explique les conditions et montre ton score.",
    ] },
    en: { title: "The catch-up round can save a lesson", items: [
      "Missed questions, asked again at the end of the lesson, now count towards passing a first lesson.",
      "Two ways to pass: at least <b>70%</b> on the first try, or at least <b>90%</b> in total once the catch-up round is done.",
      "This replaces the 80% required on later attempts: the rule is now the same every time.",
      "If you fail, a small <b>i</b> explains the rules and shows your score.",
    ] },
  },
  {
    date: "2026-11-11", icon: "🎯",
    fr: { title: "Une première leçon se mérite", items: [
      "Pour valider une brique ou un attribut la première fois, il faut au moins <b>70 %</b> de bonnes réponses.",
      "Raté ? Le Savoir gagné est conservé, mais il faut recommencer, et cette fois atteindre au moins <b>80 %</b>.",
      "Tant que ce n'est pas validé, l'attribut suivant reste verrouillé.",
      "Le seuil à atteindre est affiché sur la fiche, juste au-dessus du bouton.",
    ] },
    en: { title: "A first lesson must be earned", items: [
      "To pass a brick or an upgrade the first time, you need at least <b>70%</b> correct answers.",
      "Failed? You keep the Knowledge you earned, but you must try again, and reach at least <b>80%</b> this time.",
      "Until it's passed, the next upgrade stays locked.",
      "The score to reach is shown on the card, just above the button.",
    ] },
  },
  {
    date: "2026-11-11", icon: "🧠",
    fr: { title: "Mémoire temporaire et mémoire profonde", items: [
      "La barre d'un attribut s'appelle maintenant la <b>mémoire temporaire</b> : ce que tu as en tête en ce moment.",
      "Les étoiles deviennent la <b>mémoire profonde</b> : combien de temps la connaissance tient.",
      "Sous la production 💡, le calcul « Mt × Mp » montre d'où vient ce que rapporte chaque attribut.",
      "Un petit <b>i</b> ouvre une explication complète, avec l'état de l'attribut et ce qu'il faut pour la prochaine étoile.",
    ] },
    en: { title: "Short-term and deep memory", items: [
      "An upgrade's bar is now called <b>short-term memory</b>: what you have in mind right now.",
      "Stars are now <b>deep memory</b>: how long the knowledge lasts.",
      "Below the 💡 production, “ST × DM” shows where each upgrade's earnings come from.",
      "A small <b>i</b> opens a full explanation, with the upgrade's current state and what the next star needs.",
    ] },
  },
  {
    date: "2026-11-11", icon: "📲",
    fr: { title: "BRICKS s'installe comme une application", items: [
      "Un bouton « 📲 Installer l'application » apparaît sur l'écran de choix du profil.",
      "Sur Android et sur ordinateur, il ouvre directement l'installation ; sur iPhone, il montre les 2 gestes à faire dans Safari.",
      "Une fois installé, BRICKS s'ouvre depuis son icône, en plein écran, comme une vraie application.",
      "Le jeu démarre même sans Internet (le compte en ligne et les amis, eux, ont besoin d'une connexion).",
    ] },
    en: { title: "BRICKS installs like an app", items: [
      "An “📲 Install the app” button now appears on the profile screen.",
      "On Android and computers it opens the install window directly; on iPhone it shows the 2 steps to do in Safari.",
      "Once installed, BRICKS opens from its icon, full screen, like a real app.",
      "The game even starts without Internet (your online account and friends still need a connection).",
    ] },
  },
  {
    date: "2026-11-10", icon: "📜",
    fr: { title: "Historique des mises à jour", items: [
      "Cette fenêtre ! Elle liste les nouveautés, de la plus récente à la plus ancienne.",
      "Accessible depuis la fenêtre 👥 Amis et depuis le menu de ton profil.",
      "Une pastille « Nouveau » signale une mise à jour que tu n'as pas encore lue.",
    ] },
    en: { title: "Update history", items: [
      "This window! It lists what's new, from the most recent update to the oldest.",
      "Open it from the 👥 Friends window or from your profile menu.",
      "A “New” tag shows when there's an update you haven't read yet.",
    ] },
  },
  {
    date: "2026-11-10", icon: "🐉",
    fr: { title: "Le boss du niveau 1 : le Dragon des Mots", items: [
      "Un boss garde la fin du niveau 1, sous les briques Maison, Corps et Vêtements.",
      "Pour l'affronter : ❓ sur 3 briques, 🚫 sur 6, ✅ sur 9, ✍️ sur 12, puis 10 000 💡.",
      "L'épreuve : 20 questions sur tout le programme, avec des traductions à taper au clavier et des dictées.",
      "Le bouton 🐢 relit la phrase plus lentement pendant les dictées.",
      "Sa vie baisse selon ton score… et remonte si tu fais moins de 40 %.",
      "Tes amis voient où en est ton combat.",
    ] },
    en: { title: "Level 1 boss: the Word Dragon", items: [
      "A boss guards the end of level 1, below the House, Body and Clothes bricks.",
      "To face it: ❓ on 3 bricks, 🚫 on 6, ✅ on 9, ✍️ on 12, then 10,000 💡.",
      "The trial: 20 questions on everything, with sentences to type and dictations.",
      "The 🐢 button replays the sentence more slowly during dictations.",
      "Its health drops depending on your score… and goes back up below 40%.",
      "Your friends can see how your fight is going.",
    ] },
  },
  {
    date: "2026-11-09", icon: "👥",
    fr: { title: "Comptes en ligne et amis", items: [
      "Compte en ligne facultatif : ta progression te suit sur tous tes appareils.",
      "Ajoute tes amis grâce à leur pseudo et suis leur progression.",
      "Envoie-leur des petits messages, en direct.",
      "Possibilité de bloquer quelqu'un ou de supprimer ton compte à tout moment.",
    ] },
    en: { title: "Online accounts and friends", items: [
      "Optional online account: your progress follows you on all your devices.",
      "Add friends by username and follow their progress.",
      "Send them short messages, live.",
      "You can block someone or delete your account at any time.",
    ] },
  },
  {
    date: "2026-11-08", icon: "🧱",
    fr: { title: "Lancement de BRICKS", items: [
      "L'arbre de briques de vocabulaire, qui s'érodent avec le temps si on ne les révise pas.",
      "Les attributs à greffer : 📖 vocabulaire, ✍️ orthographe, ✅ affirmatif, 🚫 négatif, ❓ questions.",
      "Deux parcours : l'anglais pour les francophones, le français pour les Américains.",
      "Plusieurs profils sur le même appareil, et un affichage pensé pour le téléphone.",
    ] },
    en: { title: "BRICKS launch", items: [
      "The tree of vocabulary bricks, which erode over time if you don't review them.",
      "Upgrades to graft: 📖 vocabulary, ✍️ spelling, ✅ affirmative, 🚫 negative, ❓ questions.",
      "Two paths: English for French speakers, French for Americans.",
      "Several profiles on the same device, and a layout designed for phones.",
    ] },
  },
];

Object.assign(STR.fr, { news: "Nouveautés", newsTitle: "📜 Historique des mises à jour", newsNew: "Nouveau", menuNews: "📜 Nouveautés" });
Object.assign(STR.en, { news: "What's new", newsTitle: "📜 Update history", newsNew: "New", menuNews: "📜 What's new" });

const changelogLatest = () => CHANGELOG.length + ":" + CHANGELOG[0].date;
const changelogUnseen = () => !!ROOT && ROOT.newsSeen !== changelogLatest();

function fmtNewsDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "long", year: "numeric" });
}

// Bouton à placer dans la fenêtre Amis (avec la pastille « Nouveau » si besoin)
function newsButtonHtml() {
  return `<button class="btn btn-ghost news-btn" data-news>📜 ${L("news")}${changelogUnseen() ? `<span class="news-pill">${L("newsNew")}</span>` : ""}</button>`;
}

function openChangelog(back) {
  const lang = UI, X = (k) => tr(lang, k);
  // Entrées pas encore lues (premier passage : seulement la plus récente)
  const seen = ROOT.newsSeen ? Number(ROOT.newsSeen.split(":")[0]) || 0 : CHANGELOG.length - 1;
  const fresh = changelogUnseen() ? Math.max(1, CHANGELOG.length - seen) : 0;
  const html = CHANGELOG.map((e, i) => {
    const t = e[lang] || e.fr;
    const isNew = i < fresh;
    return `<article class="news-item">
      <div class="news-date">${fmtNewsDate(e.date, lang)}${isNew ? `<span class="news-pill">${X("newsNew")}</span>` : ""}</div>
      <h3><span class="news-ico">${e.icon}</span>${t.title}</h3>
      <ul>${t.items.map((x) => `<li>${x}</li>`).join("")}</ul></article>`;
  }).join("");
  openModal(`<div class="m-head">${back ? `<button class="btn btn-ghost f-back" data-back>${X("back2")}</button>` : ""}
      <div class="m-tag grow">${X("newsTitle")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body news-list">${html}</div>`, "news");
  $("#modal [data-x]").onclick = closeModal;
  const b = $("#modal [data-back]"); if (b) b.onclick = back;
  ROOT.newsSeen = changelogLatest(); save();
  updateNewsDot();
  KEY = null;
}

function updateNewsDot() {
  const chip = $("#btn-profile"); if (!chip) return;
  chip.classList.toggle("has-news", changelogUnseen());
}
