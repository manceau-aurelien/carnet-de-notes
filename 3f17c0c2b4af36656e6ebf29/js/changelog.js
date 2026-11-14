"use strict";
// =====================================================================
//  BRICKS — historique des mises à jour (la plus récente en premier)
//  Pour une nouvelle version : ajouter une entrée EN HAUT de la liste.
// =====================================================================
const CHANGELOG = [
  {
    date: "2026-11-14", icon: "🐲",
    fr: { title: "Le Dragon du Temps garde le niveau 2", items: [
      "Tout en bas de l'arbre, un 2ᵉ boss garde la sortie du niveau 2 : le <b>🐲 Dragon du Temps</b>.",
      "Pour le débloquer, valide sur les briques du niveau 2 : ⏩ le 3ᵉ temps sur <b>3</b> briques, ⏪ le 2ᵉ sur <b>6</b>, ⏳ le 1ᵉʳ sur <b>9</b> et ✍️ Orthographe sur <b>12</b>, puis paie <b>30 000 💡</b>.",
      "Mêmes règles que le Dragon des Mots : 20 questions sur tout le niveau 2 (traductions au clavier, dictées, oral et exercices), sans seconde chance.",
      "Le vaincre ouvrira le niveau 3 (relier ses phrases) dès qu'il sera prêt.",
    ] },
    en: { title: "The Time Dragon guards level 2", items: [
      "At the very bottom of the tree, a 2nd boss guards the way out of level 2: the <b>🐲 Time Dragon</b>.",
      "To unlock it, complete on level 2 bricks: the 3rd tense on <b>3</b> bricks, the 2nd on <b>6</b>, the 1st on <b>9</b> and ✍️ Spelling on <b>12</b>, then pay <b>30,000 💡</b>.",
      "Same rules as the Word Dragon: 20 questions on all of level 2 (typed translations, dictations, speaking and exercises), no second chances.",
      "Defeating it will open level 3 (linking sentences) as soon as it's ready.",
    ] },
  },
  {
    date: "2026-11-14", icon: "⏳",
    fr: { title: "Le niveau 2 est ouvert : les temps", items: [
      "Après le <b>Dragon des Mots</b>, l'arbre continue : <b>12 nouvelles briques</b> (le temps qui passe, les jours, les nombres de 11 à 20, la météo, la ville, les transports, les loisirs…).",
      "Chaque brique garde 📖 Vocabulaire, ✍️ Orthographe et 🎤 Oral, puis trois <b>temps</b> : ⏳ <b>présent continu</b>, ⏪ <b>passé</b> et ⏩ <b>futur</b>, toujours aux 3 formes (affirmative, négative, question).",
      "Trois nouvelles leçons de grammaire, en haut de l'arbre, expliquent chaque temps.",
      "À l'oral, les phrases d'un temps s'ajoutent dès que tu l'as appris sur la brique (toujours validé dès 50 %).",
      "Les étages de l'arbre s'appellent maintenant « Niveau 1 · étage 1 », « Niveau 2 · étage 1 »…",
    ] },
    en: { title: "Level 2 is open: tenses", items: [
      "After the <b>Word Dragon</b>, the tree goes on: <b>12 new bricks</b> (time words, days, numbers 11 to 20, weather, town, travel, free time…).",
      "Each brick keeps 📖 Vocabulary, ✍️ Spelling and 🎤 Speaking, then three <b>tenses</b>: ⏪ <b>passé composé</b>, ⏩ <b>futur proche</b> and ⏳ <b>imparfait</b>, always in all 3 forms (affirmative, negative, question).",
      "Three new grammar lessons, at the top of the tree, explain each tense.",
      "In speaking practice, a tense's sentences are added once you've learned it on the brick (still passed from 50%).",
      "Tree rows are now called “Level 1 · row 1”, “Level 2 · row 1”…",
    ] },
  },
  {
    date: "2026-11-14", icon: "🔭",
    fr: { title: "Le programme de la suite", items: [
      "En haut de l'arbre, la brique <b>🔭 La suite</b> montre ce qui est prévu après le Dragon des Mots.",
      "Niveau 2 : les <b>temps</b>. Niveau 3 : les <b>modaux</b> et les liaisons simples. Niveau 4 : les phrases avec <i>if / when</i>. Chaque niveau a son dragon.",
    ] },
    en: { title: "The plan for what's next", items: [
      "At the top of the tree, the <b>🔭 What's next</b> brick shows what's planned after the Word Dragon.",
      "Level 2: <b>tenses</b>. Level 3: <b>modal verbs</b> and simple linking words. Level 4: sentences with <i>si / quand</i>. Each level has its own dragon.",
    ] },
  },
  {
    date: "2026-11-14", icon: "🎤",
    fr: { title: "Oral : validation assouplie", items: [
      "Le micro reconnaît encore mal certaines phrases, même bien prononcées : l'oral n'est pas tout à fait au point.",
      "En attendant, la première leçon de <b>🎤 Oral</b> se valide avec <b>50 %</b> du premier coup, ou <b>60 %</b> avec le rattrapage (au lieu de 70 % et 90 %).",
      "Les <b>entraînements d'oral</b> aussi : ta mémoire profonde grandit dès <b>50 %</b> de réussite (au lieu de 70 %).",
      "Le petit <b>i</b> de la fiche et celui de « Les deux mémoires » l'expliquent. Les autres attributs ne changent pas.",
    ] },
    en: { title: "Speaking: easier to pass", items: [
      "The microphone still misses some sentences, even when they're well pronounced: speaking isn't quite ready yet.",
      "Meanwhile, the first <b>🎤 Speaking</b> lesson passes with <b>50%</b> on the first try, or <b>60%</b> with the catch-up round (instead of 70% and 90%).",
      "<b>Speaking practice</b> too: your deep memory grows from <b>50%</b> correct (instead of 70%).",
      "The small <b>i</b> on the card and the one in “Two kinds of memory” explain it. The other upgrades don't change.",
    ] },
  },
  {
    date: "2026-11-13", icon: "🎯",
    fr: { title: "L'oral reste dans la brique", items: [
      "Les phrases à dire utilisent maintenant <b>les 10 mots de la brique</b>, et rien d'autre : l'oral sert à les répéter sous un autre angle.",
      "Une phrase par mot, au <b>présent</b> seulement, comme dans les autres exercices (fini les phrases hors thème ou à des temps pas encore vus).",
      "D'abord à la forme affirmative ; les phrases négatives et les questions arrivent quand tu as appris 🚫 et ❓ sur la brique.",
    ] },
    en: { title: "Speaking stays in the brick", items: [
      "Sentences to say now use <b>the brick's 10 words</b>, and nothing else: speaking is another way to repeat them.",
      "One sentence per word, in the <b>present tense</b> only, like the other exercises (no more off-topic sentences or tenses you haven't seen).",
      "Affirmative first; negative sentences and questions come once you've learned 🚫 and ❓ on the brick.",
    ] },
  },
  {
    date: "2026-11-12", icon: "🗣️",
    fr: { title: "Un oral plus fiable", items: [
      "L'oral ne propose plus que des <b>phrases</b> : les mots tout seuls étaient trop mal captés par les micros des téléphones.",
      "Le micro accepte les mots qui se prononcent pareil (par exemple « two » et « to ») : ta prononciation était bonne.",
      "Le bouton « 🙊 Pas maintenant » est passé en bas à gauche, et il ignore les touchers trop rapides : plus de risque de le toucher par erreur en enchaînant les questions.",
    ] },
    en: { title: "More reliable speaking", items: [
      "Speaking exercises now only use <b>sentences</b>: single words were too often missed by phone microphones.",
      "The microphone accepts words that sound the same (for example “vert” and “verre”): your pronunciation was right.",
      "The “🙊 Not now” button moved to the bottom left and ignores taps that come too fast: no more tapping it by mistake when moving through questions.",
    ] },
  },
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
