"use strict";
// =====================================================================
//  BRICKS — mode test (chargé UNIQUEMENT par le site de test)
//  · sauvegarde séparée (bricks_test_v1), jamais celle du vrai jeu
//  · pas de compte en ligne
//  · chaque nouveau parcours commence débloqué à 100 %
//  · menu 🧪 pour remettre à zéro, ajouter du savoir, faire passer le temps…
// =====================================================================
window.BRICKS_TEST = true;

function testFullPath(course) {
  const st = freshPath(), now = Date.now();
  st.started = true;
  st.savoir = st.earned = 100000;
  st.xp = course.ranks[course.ranks.length - 1][0] + 50;
  st.streak = { days: 1, last: new Date().toDateString() };
  for (const b of course.bricks) {
    st.bricks[b.id] = {
      attrs: Object.fromEntries(attrsOf(b).map((a) => [a.id, { learned: true, hl: 6 * DAY, last: now, reviews: 3 }])),
      werr: Array(b.w.length).fill(1),
    };
  }
  for (const s of SKILL_DEF) st.skills[s.id] = true;
  st.boss = { unlocked: true, hp: 100, attempts: 0, best: 0, defeated: false, history: [] };
  st.boss2 = { unlocked: true, hp: 100, attempts: 0, best: 0, defeated: false, history: [] };
  return st;
}

function testModeHook() {
  document.title = "🧪 " + document.title;
  if ($("#btn-test")) return;
  const btn = document.createElement("button");
  btn.id = "btn-test"; btn.className = "btn test-chip"; btn.textContent = "🧪"; btn.title = "Menu de test";
  document.body.appendChild(btn);           // bouton flottant : ne charge pas la barre du haut
  btn.onclick = openTestMenu;
}

function openTestMenu() {
  const items = [
    ["full", "✅ Tout débloquer à 100 %"],
    ["zero", "🌱 Repartir de zéro (ce parcours)"],
    ["cash", "💡 +10 000 savoir"],
    ["day", "⏳ Faire passer 1 jour (érosion)"],
    ["week", "⏳ Faire passer 7 jours (érosion)"],
    ["boss5", "🐉 Boss presque vaincu (5 % de vie)"],
    ["boss100", "🐉 Boss à 100 %, pas encore débloqué"],
    ["boss2_5", "🐲 Dragon du Temps presque vaincu (5 % de vie)"],
    ["boss2_100", "🐲 Dragon du Temps à 100 %, pas encore débloqué"],
    ["news", "📜 Revoir les nouveautés comme jamais lues"],
    ["wipe", "🗑️ Effacer toute la sauvegarde de test"],
  ];
  openModal(`<div class="m-head"><div class="m-tag grow">🧪 Menu de test</div><button class="m-close" data-x>✕</button></div>
    <div class="m-body"><p class="p-sub">Site de test : sauvegarde séparée du vrai jeu, sans compte en ligne.</p>
    <div class="test-actions">${items.map(([k, t]) => `<button class="btn btn-big" data-t="${k}">${t}</button>`).join("")}</div></div>`, "test-menu");
  $("#modal [data-x]").onclick = closeModal;
  $$("#modal [data-t]").forEach((el) => (el.onclick = () => testAction(el.dataset.t)));
  KEY = null;
}

function testAction(k) {
  const id = COURSE.id;
  const age = (ms) => {
    eachLearned((b, aid, a) => { a.last -= ms; });
    S.lastTick -= ms;
  };
  if (k === "full") { P.paths[id] = testFullPath(COURSE); S = null; return enterPath(id); }
  if (k === "zero") { P.paths[id] = freshPath(); S = null; return enterPath(id); }
  if (k === "cash") { S.savoir += 10000; S.earned += 10000; }
  if (k === "day") age(DAY);
  if (k === "week") age(7 * DAY);
  if (k === "boss5") Object.assign(bossState(S, BOSSES.boss), { unlocked: true, hp: 5, defeated: false });
  if (k === "boss100") Object.assign(bossState(S, BOSSES.boss), { unlocked: false, hp: 100, defeated: false, attempts: 0, best: 0, history: [] });
  if (k === "boss2_5") Object.assign(bossState(S, BOSSES.boss2), { unlocked: true, hp: 5, defeated: false });
  if (k === "boss2_100") Object.assign(bossState(S, BOSSES.boss2), { unlocked: false, hp: 100, defeated: false, attempts: 0, best: 0, history: [] });
  if (k === "news") { delete ROOT.newsSeen; }
  if (k === "wipe") { localStorage.removeItem(ROOT_KEY); return location.reload(); }
  closeModal(); renderStatic(); renderAll();
  toast("🧪 OK");
}
