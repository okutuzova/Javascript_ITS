// === КАРТЫ (те же, только без дублирования)
const characters = [
  { name: "Harry Potter", strength: 8, defense: 7, health: 100 },
  { name: "Hermione Granger", strength: 7, defense: 8, health: 95 },
  { name: "Ron Weasley", strength: 7, defense: 6, health: 90 },
  { name: "Albus Dumbledore", strength: 10, defense: 9, health: 120 },
];

const enemies = [
  { name: "Lord Voldemort", strength: 10, defense: 9, health: 120 },
  { name: "Bellatrix Lestrange", strength: 9, defense: 8, health: 110 },
];

const spells = [
  { name: "Avada Kedavra", effect: "instant_kill", cast: target => (target.health = 0) },
  { name: "Sectumsempra", effect: "severe_damage", cast: target => (target.health -= 30) },
];

// === ВСПОМОГАТЕЛЬНЫЕ
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = randInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function createDeck() {
  const deck = [];
  for (let i = 0; i < 5; i++) {
    deck.push({ ...characters[randInt(0, characters.length - 1)] });
    deck.push({ ...enemies[randInt(0, enemies.length - 1)] });
    deck.push({ ...spells[randInt(0, spells.length - 1)] });
  }
  shuffle(deck);
  return deck;
}

function getCardDescription(card) {
  if (card.health !== undefined) {
    return `${card.name}<br>❤️ ${card.health}, 🛡️ ${card.defense || 0}, 💪 ${card.strength || 0}`;
  }
  return `${card.name} <br>✨ Spell`;
}

function calculatePoints(deck) {
  return deck.reduce((acc, card) => {
    return acc + (card.health || 0) + (card.defense || 0) + (card.strength || 0);
  }, 0);
}

// === DOM ЭЛЕМЕНТЫ
const card1El = document.getElementById("player1-card");
const card2El = document.getElementById("player2-card");
const p1PointsEl = document.getElementById("player1-points");
const p2PointsEl = document.getElementById("player2-points");
const logEl = document.getElementById("log");

let player1Deck = createDeck();
let player2Deck = createDeck();
let round = 0;

document.getElementById("next-round").addEventListener("click", () => {
  if (player1Deck.length === 0 || player2Deck.length === 0) {
    log(`🎮 Game Over!`);
    return;
  }

  round++;
  const c1 = player1Deck.shift();
  const c2 = player2Deck.shift();

  card1El.innerHTML = getCardDescription(c1);
  card2El.innerHTML = getCardDescription(c2);
  log(`🔁 Round ${round}: ${c1.name} vs ${c2.name}`);

  // SPELL vs SPELL
  if (c1.cast && c2.cast) {
    log("✨ Both cast spells! They cancel out.");
  } else {
    // SPELL
    if (c1.cast && c2.health !== undefined) c1.cast(c2);
    if (c2.cast && c1.health !== undefined) c2.cast(c1);

    // ATTACKS
    if (c1.strength && c2.defense) c2.health -= Math.max(0, c1.strength - c2.defense);
    if (c2.strength && c1.defense) c1.health -= Math.max(0, c2.strength - c1.defense);
  }

  const p1Points = calculatePoints(player1Deck.concat(c1));
  const p2Points = calculatePoints(player2Deck.concat(c2));

  p1PointsEl.textContent = p1Points;
  p2PointsEl.textContent = p2Points;

  if (player1Deck.length === 0 || player2Deck.length === 0) {
    log(`🎯 Final Score: P1: ${p1Points}, P2: ${p2Points}`);
    log(p1Points > p2Points ? "🏆 Player 1 Wins!" : p1Points < p2Points ? "🏆 Player 2 Wins!" : "🤝 It's a Tie!");
  }
});

function log(msg) {
  const p = document.createElement("div");
  p.innerHTML = msg;
  logEl.prepend(p);
}
