"use strict";
// =====================================================================
//  BRICKS — installer le jeu comme une application (écran de lancement)
//  · Android / Chrome / Edge : vraie fenêtre d'installation du navigateur
//  · iPhone / iPad : Safari n'en propose pas → on explique les 2 gestes
//  · déjà installé (ouvert depuis l'icône) : le bouton disparaît
// =====================================================================
Object.assign(STR.fr, {
  installBtn: "📲 Installer l'application",
  installTitle: "📲 Installer BRICKS",
  installIos: [
    "Ajoute BRICKS sur ton écran d'accueil : il s'ouvrira comme une vraie application, en plein écran.",
    "1. En bas de Safari, touche le bouton <b>Partager</b> <span class=\"ios-share\">⬆︎</span>",
    "2. Fais défiler puis choisis <b>« Sur l'écran d'accueil »</b>, puis <b>Ajouter</b>.",
  ],
  installOk: "Compris",
  installDone: "📲 BRICKS est installé : retrouve-le sur ton écran d'accueil !",
});
Object.assign(STR.en, {
  installBtn: "📲 Install the app",
  installTitle: "📲 Install BRICKS",
  installIos: [
    "Add BRICKS to your Home Screen: it will open like a real app, full screen.",
    "1. At the bottom of Safari, tap the <b>Share</b> button <span class=\"ios-share\">⬆︎</span>",
    "2. Scroll down, choose <b>“Add to Home Screen”</b>, then <b>Add</b>.",
  ],
  installOk: "Got it",
  installDone: "📲 BRICKS is installed: find it on your Home Screen!",
});

let INSTALL_EVT = null;
const isStandalone = () => matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
const canInstall = () => !isStandalone() && (!!INSTALL_EVT || isIOS());

window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); INSTALL_EVT = e; refreshInstall(); });
window.addEventListener("appinstalled", () => {
  INSTALL_EVT = null; refreshInstall();
  if (typeof ROOT !== "undefined" && ROOT) toast(tr(ROOT.uiLang, "installDone"));
});

function installButtonHtml(lang) {
  return `<div class="install-row ${canInstall() ? "" : "hidden"}"><button class="btn btn-gold btn-big" data-install>${tr(lang, "installBtn")}</button></div>`;
}
function refreshInstall() { $$(".install-row").forEach((el) => el.classList.toggle("hidden", !canInstall())); }

async function doInstall(lang) {
  if (INSTALL_EVT) {
    const ev = INSTALL_EVT; INSTALL_EVT = null;
    ev.prompt();
    try { await ev.userChoice; } catch (e) { /* fenêtre fermée */ }
    return refreshInstall();
  }
  if (isIOS()) {
    const X = (k) => tr(lang, k);
    openModal(`<div class="m-head"><div class="m-tag grow">${X("installTitle")}</div><button class="m-close" data-x>✕</button></div>
      <div class="m-body"><div class="lesson-ico">📲</div><div class="lesson-slide install-steps"><div>${X("installIos").map((l) => `<p>${l}</p>`).join("")}</div></div></div>
      <div class="m-foot"><div class="fb"></div><button class="btn btn-gold btn-big" data-x2>${X("installOk")}</button></div>`);
    $("#modal [data-x]").onclick = closeModal; $("#modal [data-x2]").onclick = closeModal;
    KEY = (e) => { if (e.key === "Enter") closeModal(); };
  }
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-install]")) doInstall(typeof ROOT !== "undefined" && ROOT ? ROOT.uiLang : "fr");
});
