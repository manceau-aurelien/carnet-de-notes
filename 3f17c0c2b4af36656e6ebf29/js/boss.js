"use strict";
// =====================================================================
//  BRICKS — les boss de fin de niveau (1 : Dragon des Mots, 2 : Dragon du Temps)
//  Conditions : attributs validés (au moins une fois) + 10 000 💡.
//  Épreuve : 20 questions sur TOUT le programme (même non débloqué) :
//  30 % traductions au clavier, 20 % dictées, 15 % phrases à dire au micro
//  (si le navigateur sait écouter), le reste : exercices déjà vus.
//  Vie : 100 %. Dégâts selon le score, régénération sous 40 %.
// =====================================================================
const BOSSES = {
  boss: { key: "boss", lvl: 1, cost: 10000,
    req: [["q", 3], ["neg", 6], ["aff", 9], ["spell", 12]],   // nombre de briques du niveau ayant validé l'attribut
    n: 20, write: 6, dictation: 4, oral: 3, x: 50, y: 98, icon: "🐉", from: ["house", "body", "clothes"] },
  boss2: { key: "boss2", lvl: 2, cost: 30000,
    req: [["t3", 3], ["t2", 6], ["t1", 9], ["spell", 12]],
    n: 20, write: 6, dictation: 4, oral: 3, x: 50, y: 228, icon: "🐲", from: ["hobbies", "city", "transport", "qwords"] },
};
let BOSS = BOSSES.boss;   // le dragon affiché ou combattu en ce moment
function withBoss(def, fn) { const prev = BOSS; BOSS = def; try { return fn(); } finally { BOSS = prev; } }
// Texte propre au dragon (« bossName2 » pour le 2e), sinon le texte commun
const BL = (k, ...a) => L(BOSS.key !== "boss" && STR[UI][k + "2"] !== undefined ? k + "2" : k, ...a);
// Barème : [score minimum (%), variation de vie]
const BOSS_TABLE = [[100, -50], [90, -25], [80, -15], [60, -10], [50.0001, -5], [40, 0], [0, +10]];

Object.assign(STR.fr, {
  bossName: "Le Dragon des Mots", bossSub: "Boss du niveau 1", bossTier: "Boss",
  bossInfoTip: "Comment fonctionne le boss ?",
  bossLockedSub: "🔒 conditions", bossHp: (h) => `❤️ ${h} %`, bossDefeatedSub: "🏆 vaincu",
  bossIntro: "Le gardien du niveau 1. Pour continuer l'aventure, il faudra le vaincre.",
  bossReqTitle: "Pour le débloquer", bossReqLine: (ico, n, have, need) => `${ico} ${n} validé sur <b>${have} / ${need}</b> briques`,
  bossCostLine: (c) => `💡 ${c} de Savoir`,
  bossUnlockBtn: (c) => `Débloquer le boss · 💡 ${c}`,
  bossMissing: "Valide d'abord les attributs demandés : l'épreuve porte sur tout le programme.",
  bossUnlocked: "🐉 Le boss est débloqué ! À toi de jouer.",
  bossLife: "Vie du boss", bossAttempts: (n) => `Tentatives : ${n}`, bossBest: (p) => `Meilleur score : ${p} %`,
  bossFight: "⚔️ Affronter le boss", bossHistory: "Dernières batailles",
  bossHistLine: (p, d) => `${p} % → ${d < 0 ? `<span class="up">${d} %</span>` : d > 0 ? `<span class="down">+${d} %</span>` : "aucun dégât"}`,
  bossDefeatedTitle: "🏆 Boss vaincu !", bossDefeatedText: (n, d) => `Tu as vaincu le Dragon des Mots en <b>${n}</b> tentative(s), le ${d}.`,
  bossNext: "Le <b>niveau 2</b> est ouvert : de nouvelles briques t'attendent sous le dragon, avec les <b>temps</b> (présent continu, passé, futur). Commence par la brique ⏰ <b>Le temps qui passe</b> !",
  bossRulesTitle: "Comment fonctionne le boss ?",
  bossRules: [
    "<b>🔓 Le débloquer</b><br>Valide au moins une fois : ❓ Interrogatif sur <b>3</b> briques, 🚫 Négatif sur <b>6</b>, ✅ Affirmatif sur <b>9</b> et ✍️ Orthographe sur <b>12</b>. Puis paie <b>10 000 💡</b>.",
    "<b>⚔️ L'épreuve (20 questions)</b><br>Elle porte sur <b>tout le programme</b>, même ce que tu n'as pas encore débloqué :<br>• 30 % : traduire une phrase <b>au clavier</b> (sans tuiles)<br>• 20 % : <b>dictée</b> — écrire ce que tu entends<br>• 15 % : 🎤 <b>dire une phrase</b> à voix haute (3 essais)<br>• 35 % : exercices déjà vus<br>Pas de seconde chance pendant l'épreuve. Pas de micro ? « 🙊 Pas maintenant » retire les questions orales du score.",
    "<b>❤️ La vie du boss</b> (100 % au départ)<table class=\"boss-table\"><tr><td>100 % de bonnes réponses</td><td class=\"up\">−50 %</td></tr><tr><td>≥ 90 %</td><td class=\"up\">−25 %</td></tr><tr><td>≥ 80 %</td><td class=\"up\">−15 %</td></tr><tr><td>≥ 60 %</td><td class=\"up\">−10 %</td></tr><tr><td>&gt; 50 %</td><td class=\"up\">−5 %</td></tr><tr><td>40 à 50 %</td><td>aucun dégât</td></tr><tr><td>&lt; 40 %</td><td class=\"down\">il regagne 10 %</td></tr></table>",
    "<b>🏆 La victoire</b><br>Quand sa vie tombe à 0, le boss est vaincu : la suite de l'arbre s'ouvrira (nouvelles briques, puis les temps). Abandonner en cours d'épreuve compte comme une bataille, questions restantes fausses.",
  ],
  bossStartTitle: "⚔️ L'épreuve commence",
  bossStart: (h) => `20 questions sur tout le programme, <b>sans seconde chance</b>.<br><br>Vie actuelle du boss : <b>${h} %</b><br><br>Bonne chance !`,
  bossGo: "En garde ! ⚔️",
  bossQuitConfirm: "Abandonner l'épreuve ? Elle comptera comme une bataille, avec les questions restantes comptées fausses.",
  tagWrite: "Traduction au clavier", tagDictation: "Dictée",
  qWrite: "Traduis en anglais, au clavier :", qDictation: "Écris exactement ce que tu entends (en anglais) :",
  slow: "Plus lentement", writePh: "Écris la phrase…",
  bossResTitle: "Résultat de la bataille",
  bossHit: (d) => `💥 Coup porté : <b>${d} %</b> de vie !`, bossNoHit: "🛡️ Aucun dégât cette fois.",
  bossHeal: (d) => `💚 Le boss se régénère : <b>+${d} %</b>`,
  bossScore: (p) => `${p} % de bonnes réponses`,
  retryBoss: "⚔️ Réessayer",
  friendBoss: (h) => `🐉 Boss : ${h} %`, friendBossWon: "🏆 Boss vaincu",
  // --- 2e dragon ---
  bossName2: "Le Dragon du Temps", bossSub2: "Boss du niveau 2",
  bossIntro2: "Le gardien du niveau 2. Il maîtrise tous les temps : pour passer au niveau 3, il faudra le vaincre.",
  bossUnlocked2: "🐲 Le Dragon du Temps est débloqué ! À toi de jouer.",
  bossMissing2: "Valide d'abord les attributs demandés : l'épreuve porte sur tout le niveau 2.",
  bossDefeatedText2: (n, d) => `Tu as vaincu le Dragon du Temps en <b>${n}</b> tentative(s), le ${d}.`,
  bossNext2: "Le <b>niveau 3</b> (relier ses phrases : modaux et petits mots de liaison) arrive dans une prochaine mise à jour. Touche 🔭 <b>La suite</b> en haut de l'arbre pour voir le programme.",
  bossStart2: (h) => `20 questions sur <b>tout le niveau 2</b> et ses 3 temps, <b>sans seconde chance</b>.<br><br>Vie actuelle du boss : <b>${h} %</b><br><br>Bonne chance !`,
  bossRules2: () => [
    `<b>🔓 Le débloquer</b><br>Sur les briques du niveau 2, valide au moins une fois : ${BOSSES.boss2.req.map(([k, n]) => `${AT[k].icon} ${attrName(k)} sur <b>${n}</b> briques`).join(", ")}. Puis paie <b>${BOSSES.boss2.cost.toLocaleString("fr-FR")} 💡</b>.`,
    "<b>⚔️ L'épreuve (20 questions)</b><br>Elle porte sur <b>tout le niveau 2</b> (ses 12 briques et ses 3 temps), même ce que tu n'as pas encore débloqué :<br>• 30 % : traduire une phrase <b>au clavier</b> (sans tuiles)<br>• 20 % : <b>dictée</b> — écrire ce que tu entends<br>• 15 % : 🎤 <b>dire une phrase</b> à voix haute (3 essais)<br>• 35 % : exercices déjà vus<br>Pas de seconde chance pendant l'épreuve. Pas de micro ? « 🙊 Pas maintenant » retire les questions orales du score.",
    STR.fr.bossRules[2],
    "<b>🏆 La victoire</b><br>Quand sa vie tombe à 0, le Dragon du Temps est vaincu : le niveau 3 s'ouvrira dès qu'il sera prêt. Abandonner en cours d'épreuve compte comme une bataille, questions restantes fausses.",
  ],
  friendBoss2: (h) => `🐲 Boss 2 : ${h} %`, friendBossWon2: "🏆 Boss 2 vaincu",
});
Object.assign(STR.en, {
  bossName: "The Word Dragon", bossSub: "Level 1 boss", bossTier: "Boss",
  bossInfoTip: "How does the boss work?",
  bossLockedSub: "🔒 requirements", bossHp: (h) => `❤️ ${h}%`, bossDefeatedSub: "🏆 defeated",
  bossIntro: "The guardian of level 1. To continue the adventure, you'll have to defeat it.",
  bossReqTitle: "To unlock it", bossReqLine: (ico, n, have, need) => `${ico} ${n} completed on <b>${have} / ${need}</b> bricks`,
  bossCostLine: (c) => `💡 ${c} Knowledge`,
  bossUnlockBtn: (c) => `Unlock the boss · 💡 ${c}`,
  bossMissing: "Complete the required upgrades first: the trial covers the whole program.",
  bossUnlocked: "🐉 The boss is unlocked! Your move.",
  bossLife: "Boss health", bossAttempts: (n) => `Attempts: ${n}`, bossBest: (p) => `Best score: ${p}%`,
  bossFight: "⚔️ Fight the boss", bossHistory: "Latest battles",
  bossHistLine: (p, d) => `${p}% → ${d < 0 ? `<span class="up">${d}%</span>` : d > 0 ? `<span class="down">+${d}%</span>` : "no damage"}`,
  bossDefeatedTitle: "🏆 Boss defeated!", bossDefeatedText: (n, d) => `You defeated the Word Dragon in <b>${n}</b> attempt(s), on ${d}.`,
  bossNext: "<b>Level 2</b> is open: new bricks are waiting below the dragon, with <b>tenses</b> (passé composé, futur proche, imparfait). Start with the ⏰ <b>Time words</b> brick!",
  bossRulesTitle: "How does the boss work?",
  bossRules: [
    "<b>🔓 Unlocking it</b><br>Complete at least once: ❓ Questions on <b>3</b> bricks, 🚫 Negative on <b>6</b>, ✅ Affirmative on <b>9</b> and ✍️ Spelling on <b>12</b>. Then pay <b>10,000 💡</b>.",
    "<b>⚔️ The trial (20 questions)</b><br>It covers <b>the whole program</b>, even what you haven't unlocked yet:<br>• 30%: translate a sentence <b>by typing it</b> (no tiles)<br>• 20%: <b>dictation</b> — write what you hear<br>• 15%: 🎤 <b>say a sentence</b> out loud (3 tries)<br>• 35%: exercises you've already seen<br>No second chances during the trial. No microphone? “🙊 Not now” removes the speaking questions from your score.",
    "<b>❤️ Boss health</b> (100% at the start)<table class=\"boss-table\"><tr><td>100% correct</td><td class=\"up\">−50%</td></tr><tr><td>≥ 90%</td><td class=\"up\">−25%</td></tr><tr><td>≥ 80%</td><td class=\"up\">−15%</td></tr><tr><td>≥ 60%</td><td class=\"up\">−10%</td></tr><tr><td>&gt; 50%</td><td class=\"up\">−5%</td></tr><tr><td>40 to 50%</td><td>no damage</td></tr><tr><td>&lt; 40%</td><td class=\"down\">it heals 10%</td></tr></table>",
    "<b>🏆 Victory</b><br>When its health drops to 0, the boss is defeated: the rest of the tree will open up (new bricks, then tenses). Quitting mid-trial counts as a battle, with the remaining questions marked wrong.",
  ],
  bossStartTitle: "⚔️ The trial begins",
  bossStart: (h) => `20 questions on the whole program, <b>no second chances</b>.<br><br>Boss health: <b>${h}%</b><br><br>Good luck!`,
  bossGo: "En garde! ⚔️",
  bossQuitConfirm: "Give up the trial? It will count as a battle, with the remaining questions marked wrong.",
  tagWrite: "Typed translation", tagDictation: "Dictation",
  qWrite: "Translate into French, by typing it:", qDictation: "Write exactly what you hear (in French):",
  slow: "Slower", writePh: "Type the sentence…",
  bossResTitle: "Battle result",
  bossHit: (d) => `💥 Hit: <b>${d}%</b> health!`, bossNoHit: "🛡️ No damage this time.",
  bossHeal: (d) => `💚 The boss heals: <b>+${d}%</b>`,
  bossScore: (p) => `${p}% correct`,
  retryBoss: "⚔️ Try again",
  friendBoss: (h) => `🐉 Boss: ${h}%`, friendBossWon: "🏆 Boss defeated",
  // --- 2nd dragon ---
  bossName2: "The Time Dragon", bossSub2: "Level 2 boss",
  bossIntro2: "The guardian of level 2. It masters every tense: to move on to level 3, you'll have to defeat it.",
  bossUnlocked2: "🐲 The Time Dragon is unlocked! Your move.",
  bossMissing2: "Complete the required upgrades first: the trial covers all of level 2.",
  bossDefeatedText2: (n, d) => `You defeated the Time Dragon in <b>${n}</b> attempt(s), on ${d}.`,
  bossNext2: "<b>Level 3</b> (linking sentences: modal verbs and linking words) is coming in a future update. Tap 🔭 <b>What's next</b> at the top of the tree to see the plan.",
  bossStart2: (h) => `20 questions on <b>all of level 2</b> and its 3 tenses, <b>no second chances</b>.<br><br>Boss health: <b>${h}%</b><br><br>Good luck!`,
  bossRules2: () => [
    `<b>🔓 Unlocking it</b><br>On level 2 bricks, complete at least once: ${BOSSES.boss2.req.map(([k, n]) => `${AT[k].icon} ${attrName(k)} on <b>${n}</b> bricks`).join(", ")}. Then pay <b>${BOSSES.boss2.cost.toLocaleString("en-US")} 💡</b>.`,
    "<b>⚔️ The trial (20 questions)</b><br>It covers <b>all of level 2</b> (its 12 bricks and 3 tenses), even what you haven't unlocked yet:<br>• 30%: translate a sentence <b>by typing it</b> (no tiles)<br>• 20%: <b>dictation</b> — write what you hear<br>• 15%: 🎤 <b>say a sentence</b> out loud (3 tries)<br>• 35%: exercises you've already seen<br>No second chances during the trial. No microphone? “🙊 Not now” removes the speaking questions from your score.",
    STR.en.bossRules[2],
    "<b>🏆 Victory</b><br>When its health drops to 0, the Time Dragon is defeated: level 3 will open as soon as it's ready. Quitting mid-trial counts as a battle, with the remaining questions marked wrong.",
  ],
  friendBoss2: (h) => `🐲 Boss 2: ${h}%`, friendBossWon2: "🏆 Boss 2 defeated",
});

// ---------- État ----------
function bossState(st = S, def = BOSS) {
  if (!st[def.key]) st[def.key] = { unlocked: false, hp: 100, attempts: 0, best: 0, defeated: false, history: [] };
  return st[def.key];
}
function bossCounts() {
  const c = Object.fromEntries(BOSS.req.map(([k]) => [k, 0]));
  for (const id in S.bricks) {
    if (!BR[id] || BR[id].lvl !== BOSS.lvl) continue;   // seules les briques du niveau gardé comptent
    for (const k in c) { const a = S.bricks[id].attrs[k]; if (a && a.learned) c[k]++; }
  }
  return c;
}
const bossReqMet = () => { const c = bossCounts(); return BOSS.req.every(([k, n]) => c[k] >= n); };
function bossDelta(pct) {
  for (const [min, d] of BOSS_TABLE) if (pct >= min - 1e-9) return d;
  return 10;
}

// ---------- Arbre ----------
function bossNodeHtml(def = BOSS) { return withBoss(def, bossNodeInner); }
function bossNodeInner() {
  const st = bossState();
  const cls = st.defeated ? "defeated" : st.unlocked ? "open" : bossReqMet() ? "available" : "locked";
  const sub = st.defeated ? BL("bossDefeatedSub") : st.unlocked ? BL("bossHp", st.hp) : BL("bossLockedSub");
  const sel = SEL.type === "boss" && (SEL.id || "boss") === BOSS.key ? " selected" : "";
  return `<div class="node boss ${cls}${sel}" data-boss="${BOSS.key}" style="left:${BOSS.x}%;top:${nodeTop(BOSS.y)}px">
    <div class="ring boss-ring" style="--p:${st.defeated ? 0 : st.hp}"><div class="ring-in">${st.defeated ? "🏆" : BOSS.icon}</div>
      <button class="boss-info" data-boss-info="${BOSS.key}" title="${esc(BL("bossInfoTip"))}">i</button></div>
    <div class="n-name">${BL("bossName")}</div><div class="n-sub">${sub}</div>
    ${st.unlocked && !st.defeated ? `<div class="boss-hp mini"><div style="width:${st.hp}%"></div></div>` : ""}</div>`;
}
function bossLinks() {
  const links = (def) => def.from.map((id) => {
    const p = BR[id], on = bossState(S, def).unlocked;
    return `<line class="boss-link ${on ? "on" : ""}" x1="${p.x}%" y1="${nodeTop(p.y)}" x2="${def.x}%" y2="${nodeTop(def.y)}"/>`;
  }).join("");
  const b1 = BOSSES.boss, b2 = BOSSES.boss2;
  if (!lvl2Open() || !BR.time) return links(b1);
  // le Dragon des Mots vaincu ouvre le niveau 2, gardé à son tour par le Dragon du Temps
  return links(b1) + `<line class="${owned("time") ? "on" : "avail"}" x1="${b1.x}%" y1="${nodeTop(b1.y)}" x2="${BR.time.x}%" y2="${nodeTop(BR.time.y)}"/>` + links(b2);
}

// ---------- Panneau ----------
function bossPanel() {
  const st = bossState(), c = bossCounts();
  const head = `<div class="p-head"><div class="p-ico boss-ico">${st.defeated ? "🏆" : BOSS.icon}</div><div class="grow-box">
      <div class="p-title">${BL("bossName")}</div><div class="p-sub">${BL("bossSub")}</div></div>
      <button class="boss-info static" data-act="boss-info" title="${esc(BL("bossInfoTip"))}">i</button></div>`;
  if (st.defeated) {
    const d = new Date(st.defeatedAt || Date.now()).toLocaleDateString(UI === "fr" ? "fr-FR" : "en-US", { day: "numeric", month: "long", year: "numeric" });
    return head + `<div class="boss-card won"><div class="boss-big">🏆</div><div class="p-title">${BL("bossDefeatedTitle")}</div>
      <p class="p-text">${BL("bossDefeatedText", st.attempts, d)}</p></div><p class="p-text">${BL("bossNext")}</p>`;
  }
  if (st.unlocked) {
    const hist = (st.history || []).slice(0, 5).map((h) => `<div class="boss-hist">${BL("bossHistLine", h.pct, h.delta)}</div>`).join("");
    return head + `<p class="p-text">${BL("bossIntro")}</p>
      <div class="boss-card"><div class="boss-life-label"><span>${BL("bossLife")}</span><b>${st.hp} %</b></div>
        <div class="boss-hp"><div style="width:${st.hp}%"></div></div>
        <div class="boss-meta"><span>${BL("bossAttempts", st.attempts)}</span>${st.attempts ? `<span>${BL("bossBest", st.best)}</span>` : ""}</div></div>
      <button class="btn btn-bad btn-big full boss-fight-btn" data-act="boss-fight">${BL("bossFight")}</button>
      ${hist ? `<div class="p-section"><h4>${BL("bossHistory")}</h4>${hist}</div>` : ""}`;
  }
  const reqs = BOSS.req.map(([k, n]) => {
    const have = Math.min(c[k], n), ok = c[k] >= n;
    return `<div class="boss-req ${ok ? "ok" : ""}"><div>${ok ? "✔" : "✘"} ${BL("bossReqLine", AT[k].icon, attrName(k), have, n)}</div>
      <div class="bar"><div style="width:${(have / n) * 100}%;background:${ok ? "var(--good)" : "var(--orange)"}"></div></div></div>`;
  }).join("");
  const reqOk = bossReqMet(), money = S.savoir >= BOSS.cost;
  return head + `<p class="p-text">${BL("bossIntro")}</p>
    <div class="p-section"><h4>${BL("bossReqTitle")}</h4>${reqs}
      <div class="boss-req ${money ? "ok" : ""}"><div>${money ? "✔" : "✘"} ${BL("bossCostLine", fmt(BOSS.cost))} <span class="p-sub">(${fmt(S.savoir)})</span></div>
      <div class="bar"><div style="width:${Math.min(100, (S.savoir / BOSS.cost) * 100)}%;background:${money ? "var(--good)" : "var(--gold)"}"></div></div></div></div>
    <button class="btn btn-gold btn-big full" data-act="boss-unlock" ${reqOk && money ? "" : "disabled"}>${BL("bossUnlockBtn", fmt(BOSS.cost))}</button>
    ${reqOk ? "" : `<p class="p-sub center">${BL("bossMissing")}</p>`}`;
}

function bossRulesModal() {
  openModal(`<div class="m-head"><div class="m-tag grow">${BOSS.icon} ${BL("bossRulesTitle")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body boss-rules">${BL("bossRules").map((r) => `<div class="boss-rule">${r}</div>`).join("")}</div>
    <div class="m-foot"><div class="fb"></div><button class="btn btn-good btn-big" data-ok>${L("gotIt")}</button></div>`, "boss-modal");
  $("#modal [data-x]").onclick = closeModal; $("#modal [data-ok]").onclick = closeModal;
  KEY = (e) => { if (e.key === "Enter") closeModal(); };
}

function unlockBoss() {
  const st = bossState();
  if (st.unlocked || !bossReqMet() || !spend(BOSS.cost)) return;
  st.unlocked = true;
  SFX.unlock(); toast(BL("bossUnlocked"), "bad");
  save(); renderAll();
}

// =====================================================================
//  L'ÉPREUVE
// =====================================================================
// Variantes acceptées : formes féminines quand le sujet peut être une fille (je, tu, nous, vous)
const FR_FEM_ALT = { heureux: "heureuse", "désolé": "désolée", ami: "amie", amis: "amies", inquiet: "inquiète", inquiets: "inquiètes" };
// Niveau 2 : participes et adjectifs qui s'accordent (je suis allé / allée…)
["allé", "parti", "venu", "arrivé", "resté", "tombé", "monté", "rentré", "fatigué", "prêt", "occupé"].forEach((w) => {
  FR_FEM_ALT[w] = w + "e"; FR_FEM_ALT[w + "s"] = w + "es";
});
function acceptVariants(s) {
  const out = [s];
  if (COURSE.target === "fr" && /(^|\s)(je|j'|tu|nous|vous)(\s|$)|^j'/i.test(s.replace(/'/g, "' "))) {
    const alt = s.replace(/[\p{L}']+/gu, (w) => FR_FEM_ALT[w.toLowerCase()] || w);
    if (alt !== s) out.push(alt);
  }
  return out;
}
const EN_CONTRACTIONS = [
  [/\bdon't\b/g, "do not"], [/\bdoesn't\b/g, "does not"], [/\bisn't\b/g, "is not"], [/\baren't\b/g, "are not"],
  [/\bi'm\b/g, "i am"], [/\bit's\b/g, "it is"], [/\bhe's\b/g, "he is"], [/\bshe's\b/g, "she is"], [/\byou're\b/g, "you are"],
  [/\bwe're\b/g, "we are"], [/\bthey're\b/g, "they are"], [/\bthat's\b/g, "that is"], [/\bcan't\b/g, "cannot"],
  [/\bwon't\b/g, "will not"], [/\bgrey\b/g, "gray"], [/\bdidn't\b/g, "did not"], [/\bwasn't\b/g, "was not"], [/\bweren't\b/g, "were not"],
];
function normSentence(s) {
  let t = s.toLowerCase().replace(/[’`´]/g, "'").replace(/œ/g, "oe").replace(/æ/g, "ae")
    .replace(/[.,!?;:«»"“”()]/g, " ").replace(/-/g, " ").replace(/\s*'\s*/g, "'").replace(/\s+/g, " ").trim();
  if (COURSE.target === "en") EN_CONTRACTIONS.forEach(([re, r]) => { t = t.replace(re, r); });
  return t;
}
// Deux mots qui diffèrent par la GRAMMAIRE (pas une faute de frappe) : don't/doesn't, like/likes,
// est/es, le/la, vert/verte, ami/amie… → la réponse est fausse.
function grammarPair(a, b) {
  const tf = COURSE.TFAM || {}, cr = (w) => w.replace(/^(j|l|n|d|c|qu)'/, "");
  if ((tf[a] || []).includes(b) || (tf[cr(a)] || []).includes(cr(b))) return true;
  if (COURSE.target === "fr" && FR_AUX_SWAP[cr(a)] === cr(b)) return true;
  if (COURSE.target === "en") {
    const fam = (w) => (EN_SW[w] ? [w, ...EN_SW[w]] : EN_VERBS[w] ? [w, EN_VERBS[w]] : EN_VERBS_INV[w] ? [w, EN_VERBS_INV[w]] : null);
    const f = fam(a); if (f && f.includes(b)) return true;
    const gram = ["not", "no", "do", "does", "is", "are", "am", "a", "an", "the"];
    if (gram.includes(a) || gram.includes(b)) return true;
    return a + "s" === b || b + "s" === a || a + "es" === b || b + "es" === a;
  }
  const core = (w) => w.replace(/^(j|l|n|d|c|qu)'/, "");
  const x = core(a), y = core(b);
  const f = FR_FAM[x]; if (f && f.includes(y)) return true;
  if (FR_FEM_ALT[x] === y || FR_FEM_ALT[y] === x) return true;
  const gram = ["ne", "pas", "que", "de", "du", "le", "la", "les", "un", "une", "des"];
  if (gram.includes(x) || gram.includes(y)) return true;
  return x + "e" === y || y + "e" === x || x + "s" === y || y + "s" === x;
}
// Version « relâchée » : sans accents ni apostrophes, contractions anglaises sans apostrophe rétablies
const EN_LOOSE = { didnt: "did not", wasnt: "was not", werent: "were not", dont: "do not", doesnt: "does not", isnt: "is not", arent: "are not", cant: "cannot", wont: "will not", youre: "you are", theyre: "they are" };
function looseSentence(s) {
  let t = noAcc(s).replace(/'/g, " ").replace(/\s+/g, " ").trim();
  if (COURSE.target === "en") t = t.split(" ").map((w) => EN_LOOSE[w] || w).join(" ");
  return t;
}
// Correction : exacte (1), presque (0,5 : accents, apostrophe oubliée, UNE faute de frappe) ou fausse (0)
function gradeSentence(input, accept) {
  const g = normSentence(input), acc = accept.map(normSentence);
  if (acc.includes(g)) return { credit: 1 };
  if (COURSE.target === "fr" && acc.some((a) => noAcc(a) === noAcc(g))) return { credit: 0.5, why: "almostAccent" };
  if (acc.some((a) => looseSentence(a) === looseSentence(g))) return { credit: 0.5, why: "almostTypo" };
  const gw = g.split(" ");
  for (const a of acc) {
    const aw = a.split(" ");
    if (aw.length !== gw.length) continue;
    const diff = aw.map((w, k) => k).filter((k) => aw[k] !== gw[k]);
    if (diff.length !== 1) continue;
    const x = aw[diff[0]], y = gw[diff[0]];
    if (grammarPair(x, y)) continue;
    if (x.length >= 3 && lev(noAcc(x), noAcc(y)) <= (x.length >= 7 ? 2 : 1)) return { credit: 0.5, why: "almostTypo" };
  }
  return { credit: 0 };
}

function buildBossQuestions() {
  const forms = ["aff", "neg", "q"];
  const canHear = HAS_TTS && sound();
  const nDict = canHear ? BOSS.dictation : 0, nWrite = BOSS.write + (BOSS.dictation - nDict);
  // Toutes les phrases de toutes les briques, dans toutes les formes
  // Chaque dragon interroge sur SON niveau : formes (niveau 1) ou temps aux 3 formes (niveau 2)
  const B1 = BRICKS.filter((b) => b.lvl === BOSS.lvl), lv2 = BOSS.lvl === 2;
  const sents = (b) => (lv2 ? TENSE_IDS.flatMap((aid) => b.t[aid].map((s, k) => ({ s, si: aid + k, aid })))
    : b.s.map((s, si) => ({ s, si, aid: null })));
  const pool = shuffle(B1.flatMap((b) => sents(b).flatMap(({ s, si, aid }) => [0, 1, 2].map((f) => ({ b, s, si, f, aid })))));
  const usedSent = new Set();
  const nextSent = () => { const x = pool.find((p) => !usedSent.has(p.b.id + p.si)); usedSent.add(x.b.id + x.si); return x; };
  const qs = [];
  for (let k = 0; k < nWrite; k++) {
    const { b, s, f, aid } = nextSent();
    qs.push({ kind: "write", tag: L("tagWrite"), instr: L("qWrite"), prompt: s.nat[f], sentence: true,
      accept: acceptVariants(s.tg[f]), solution: s.tg[f], sayAfter: s.tg[f], bid: b.id, aid: aid || forms[f] });
  }
  for (let k = 0; k < nDict; k++) {
    const { b, s, f, aid } = nextSent();
    qs.push({ kind: "write", listen: true, slow: true, tag: L("tagDictation"), instr: L("qDictation"), say: s.tg[f], autoSay: true,
      accept: acceptVariants(s.tg[f]), solution: `${s.tg[f]} <span class="p-sub">(${s.nat[f]})</span>`, bid: b.id, aid: aid || forms[f] });
  }
  // 15 % : phrases du quotidien à dire au micro (toutes briques confondues)
  const nOral = CAN_LISTEN ? BOSS.oral : 0;
  shuffle(B1.flatMap((b) => [...b.o, ...(lv2 ? TENSE_IDS.flatMap((aid) => b.t[aid]) : [])].map((o) => ({ b, o })))).slice(0, nOral).forEach(({ b, o }) => {
    const f = Math.floor(Math.random() * 3), tg = o.tg[f];
    qs.push({ kind: "speak", sentence: true, tag: L("tagOral"), instr: L("qSpeakSentence"), prompt: tg, say: tg,
      sub: o.nat[f], subPlain: true, accept: [tg], solution: tg, bid: b.id, aid: "oral" });
  });
  // Le reste : exercices déjà vus, piochés dans toutes les briques
  const classic = nOral ? ["vocab", "vocab", "spell", "s", "s", "s", "s"] : ["vocab", "vocab", "vocab", "spell", "spell", "s", "s", "s", "s", "s"];
  classic.forEach((t) => {
    const b = pick(B1);
    let q;
    if (t === "vocab") q = genVocab(b, new Set());
    else if (t === "spell") q = genSpell(b, new Set());
    else { const aid = pick(lv2 ? TENSE_IDS : forms); q = genSentence(b, aid, new Set(), 0); q.aid = aid; }
    q.bid = b.id; q.aid = q.aid || (t === "s" ? "aff" : t);
    qs.push(q);
  });
  qs.forEach((q) => { q.key = "boss"; });
  return shuffle(qs);
}

function startBossIntro() {
  const st = bossState();
  slides([BL("bossStart", st.hp)], { icon: BOSS.icon, title: BL("bossStartTitle"), finalLabel: BL("bossGo"), onEnd: startBossFight });
  $("#modal").classList.add("boss-modal");
}
function startBossFight() {
  const qs = buildBossQuestions();
  SES = { boss: true, bossKey: BOSS.key, targets: [], opts: { title: BL("bossName") }, per: { boss: { ok: 0, tot: 0, wasLearned: false, rBefore: 1 } },
    qs, i: 0, combo: 0, maxCombo: 0, gained: 0, firstTotal: qs.length, perfect: true };
  renderQ();
}
function bossHeadHtml() {
  const st = bossState();
  return `<div class="boss-head"><span>${BOSS.icon}</span><div class="boss-hp mini"><div style="width:${st.hp}%"></div></div><b>${st.hp}%</b></div>`;
}

function finishBoss(forfeit = false) {
  BOSS = BOSSES[SES.bossKey] || BOSS;
  const st = bossState(), p = SES.per.boss, n = SES.firstTotal;
  const pct = Math.round((p.ok / n) * 1000) / 10;
  const delta = bossDelta((p.ok / n) * 100);
  const hpBefore = st.hp;
  st.hp = Math.max(0, Math.min(100, st.hp + delta));
  st.attempts++; st.best = Math.max(st.best || 0, pct);
  st.history = [{ t: Date.now(), pct, delta, hp: st.hp }, ...(st.history || [])].slice(0, 20);
  const won = st.hp <= 0 && !st.defeated;
  if (won) { st.defeated = true; st.defeatedAt = Date.now(); }
  S.stats.sessions++; S.lastActive = Date.now();
  touchStreak();
  const gained = SES.gained;
  SES = null;
  save();

  const msg = delta < 0 ? BL("bossHit", delta) : delta > 0 ? BL("bossHeal", delta) : BL("bossNoHit");
  const rows = BOSS_TABLE.map(([min, d], k) => {
    const next = BOSS_TABLE[k - 1];
    const label = k === 0 ? "100 %" : min === 0 ? "< 40 %" : min === 40 ? "40 – 50 %" : min > 50 && min < 51 ? "> 50 %" : `≥ ${min} %`;
    return `<tr class="${d === delta ? "hit" : ""}"><td>${label}</td><td class="${d < 0 ? "up" : d > 0 ? "down" : ""}">${d > 0 ? "+" : ""}${d} %</td></tr>`;
  }).join("");
  openModal(`<div class="m-head"><div class="m-tag grow">${BOSS.icon} ${BL("bossResTitle")}</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body"><div class="res-head">
      <div class="boss-avatar ${delta < 0 ? "hurt" : ""} ${won ? "dead" : ""}">${won ? "💀" : BOSS.icon}</div>
      <div class="res-score">${pct}%</div><div class="res-sub">${BL("bossScore", pct)}${forfeit ? " · 🏳️" : ""}</div>
      <div class="boss-msg">${msg}</div>
      <div class="boss-life-label"><span>${BL("bossLife")}</span><b id="boss-hp-num">${hpBefore} %</b></div>
      <div class="boss-hp big"><div id="boss-hp-bar" style="width:${hpBefore}%"></div></div>
      ${won ? `<div class="boss-card won"><div class="p-title">${BL("bossDefeatedTitle")}</div><p class="p-text">${BL("bossNext")}</p></div>` : ""}
      <div class="res-gain">+${gained} 💡</div></div>
      <table class="boss-table result">${rows}</table></div>
    <div class="m-foot"><div class="fb"></div>${won ? "" : `<button class="btn" data-again>${L("retryBoss")}</button>`}
      <button class="btn btn-gold btn-big" data-close>${L("cont")}</button></div>`, "boss-modal");
  $("#modal [data-x]").onclick = closeModal; $("#modal [data-close]").onclick = closeModal;
  const ag = $("#modal [data-again]"); if (ag) ag.onclick = startBossIntro;
  KEY = (e) => { if (e.key === "Enter") closeModal(); };
  setTimeout(() => {
    const bar = $("#boss-hp-bar"), num = $("#boss-hp-num"); if (!bar) return;
    bar.style.width = st.hp + "%"; num.textContent = st.hp + " %";
    if (delta < 0) SFX.combo(); else if (delta > 0) SFX.ko();
  }, 500);
  if (won) setTimeout(() => { SFX.unlock(); setTimeout(SFX.combo, 450); }, 900);
  renderTop();
}
