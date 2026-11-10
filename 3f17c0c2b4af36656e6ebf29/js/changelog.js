"use strict";
// =====================================================================
//  BRICKS — historique des mises à jour (la plus récente en premier)
//  Pour une nouvelle version : ajouter une entrée EN HAUT de la liste.
// =====================================================================
const CHANGELOG = [
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
