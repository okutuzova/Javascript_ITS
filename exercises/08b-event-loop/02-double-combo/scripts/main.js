/**
 * @file main.js
 * @author Olga Kutuzova
 * @description 02-double-combo
 *
 * This is a turn-based combat simulation between Harry Potter and his friends,
 * and the enemies of Hogwarts. The game generates a queue of 15 random cards 
 * for each player, and each player plays a card on his turn. 
 * The cards can be characters, enemies, or spells.
 * The characters and enemies have different strength, health and defense points, 
 * and the spells make different damage.
 */


// Define the characters, enemies, and spells
const characters = [
    // A character card (object) with properties (name, strength, defense, health) 
    // and methods (attack, buff, takeDamage, duel)
    { 
        name: "Harry Potter", 
        strength: 8, 
        defense: 7, 
        health: 100,
        // Attack method takes a target as an argument,
        // and reduces the target's health by the character's strength
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        // TakeDamage method takes an amount as an argument,
        // and reduces the character's health by that amount
        takeDamage(amount) { this.health -= amount; },
        // Duel method takes an opponent as an argument,
        // and returns the character with the higher strength + defense
        duel(opponent) { 
            return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
        }
    },
    { 
        name: "Albus Dumbledore", 
        strength: 10, 
        defense: 9, 
        health: 120,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { 
            return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
        }
    },
    { 
        name: "Ron Weasley", 
        strength: 7, 
        defense: 6, 
        health: 90,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { 
            return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
        }
    },
    { 
        name: "Hermione Granger", 
        strength: 7, 
        defense: 8, 
        health: 95,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { 
            return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
        }
    },
    { 
        name: "Minerva McGonagall", 
        strength: 9, 
        defense: 8, 
        health: 110,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { 
            return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
        }
    },
    { 
        name: "Neville Longbottom", 
        strength: 6, 
        defense: 7, 
        health: 85,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { 
            return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
        }
    }
];

const enemies = [
    { 
        name: "Lord Voldemort", 
        strength: 10, 
        defense: 9, 
        health: 120,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Bellatrix Lestrange", 
        strength: 9, 
        defense: 8, 
        health: 110,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Lucius Malfoy", 
        strength: 8, 
        defense: 7, 
        health: 100,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Draco Malfoy", 
        strength: 7, 
        defense: 6, 
        health: 90,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Vincent Crabbe", 
        strength: 6, 
        defense: 5, 
        health: 85,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Dolores Umbridge", 
        strength: 5, 
        defense: 5, 
        health: 80,
        attack(target) {
            const damage = this.strength - target.defense;
            if (damage > 0) target.takeDamage(damage);
        },
        takeDamage(amount) { this.health -= amount; }
    }
];

const spells = [
    {
        name: "Avada Kedavra", 
        effect: "instant_kill",
        cast(target) { 
            if (target.health !== undefined) target.health = 0;
        }
    },
    {
        name: "Imperio", 
        effect: "mind_control",
        cast(target) { 
            if (target.strength !== undefined) target.strength = 0;
        }
    },
    {
        name: "Cruciatus", 
        effect: "torture",
        cast(target) { 
            if (target.health !== undefined) target.health -= 20;
        }
    },
    {
        name: "Sectumsempra", 
        effect: "severe_damage",
        cast(target) { 
            if (target.health !== undefined) target.health -= 30;
        }
    },
    {
        name: "Stupefy", 
        effect: "stun",
        cast(target) { 
            if (target.defense !== undefined) target.defense -= 5;
        }
    },
    {
        name: "Expelliarmus", 
        effect: "expel",
        cast(target) { 
            if (target.health !== undefined) target.defense = 0;
        }
    }
];

// Helper functions

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random integer between min and max (inclusive).
 */
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fisher-Yates shuffle algorithm
 * @param {array} array 
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = randInt(0, i); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

/**
 * Creates an array of 15 random cards for each player.
 * @returns {array} An array of 15 random cards for each player.
 */
function createRandomCards() {
    const playerCards = [];
    for (let i = 0; i < 5; i++) {
        // Create new instances of cards with all their methods
        // ... spread operator guarantees a new object is created for every card
        const randomCharacter = { ...characters[randInt(0, characters.length - 1)] };
        const randomEnemy = { ...enemies[randInt(0, enemies.length - 1)] };
        const randomSpell = { ...spells[randInt(0, spells.length - 1)] };
        // Add the random cards to the playerCards array
        playerCards.push(randomCharacter, randomEnemy, randomSpell);
    }
    // Shuffle the array to mix up the cards
    shuffleArray(playerCards);
    return playerCards;
}

// Calculation helper functions
/**
 * Calculates the total left points of the player's cards based on health.
 * @param {array} playerCards - An array of player's cards.
 * @returns {number} The total left points of the player's cards.
 */
function calculateHealthPoints(playerCards) {
    return playerCards.reduce((total, card) => {
        if (card.health !== undefined && card.health > 0) {
            total += card.health;
        }
        return total;
    }, 0);
}
/**
 * Calculates the total left points of the player's cards based on strength.
 * @param {array} playerCards - An array of player's cards.
 * @returns {number} The total left points of the player's cards.
 */
function calculateStrengthPoints(playerCards) {
    return playerCards.reduce((total, card) => {
        if (card.strength !== undefined && card.strength > 0) {
            total += card.strength; 
        }
        return total;
    }, 0);
}

/**
 * Calculates the total left points of the player's cards based on defense.
 * @param {array} playerCards - An array of player's cards.
 * @returns {number} The total left points of the player's cards.
 */
function calculateDefensePoints(playerCards) {
    return playerCards.reduce((total, card) => {
        if (card.defense !== undefined && card.defense > 0) {
            total += card.defense; 
        }
        return total;
    }, 0);
}

/**
 * Calculates the total left points of the player's cards.
 * @param {array} playerCards - An array of player's cards.
 * @returns {number} The total left points of the player's cards.
 */
function calculatePoints(playerCards) {
    return calculateHealthPoints(playerCards) + 
           calculateStrengthPoints(playerCards) + 
           calculateDefensePoints(playerCards);
}

// Combat helper function

/**
 * Checks if the card is an enemy
 * @param {object} card 
 * @returns boolean - true if the card is an enemy, false otherwise
 */
function isEnemy(card) {
    return enemies.some(enemy => enemy.name === card.name);
}

/**
 * Stores cards that were played 
 */
let playedCards = { player1: [], player2: [] };



/**
 * Handles special conditions in combat
 * @param {object} card1 - First player's card
 * @param {object} card2 - Second player's card
 * @param {string} message - Message to display for the special condition
 * @returns {boolean} - True if special condition was handled, false otherwise
 */
function handleSpecialCondition(card1, card2, message) {
    if (!message) return false;
    
    console.log(message);
    // Store cards if they have health
    if (card1.health !== undefined) playedCards.player1.push({...card1});
    if (card2.health !== undefined) playedCards.player2.push({...card2});
    
    // Calculate points
    playerOnePoints = calculatePoints(playerOneCards) + calculatePoints(playedCards.player1);
    playerTwoPoints = calculatePoints(playerTwoCards) + calculatePoints(playedCards.player2);
    
    console.log(`Player 1's total points: ${playerOnePoints}`);
    console.log(`Player 2's total points: ${playerTwoPoints}`);
    return true;
}

/**
 * starts the game
 * @param {array} playerOneCards 
 * @param {array} playerTwoCards 
 */
function playRound(playerOneCards, playerTwoCards) {
    let round = 0;
    while (playerOneCards.length > 0 && playerTwoCards.length > 0) {
        round++;
        console.log(`\nRound ${round}`);
        let card1 = playerOneCards.shift();
        let card2 = playerTwoCards.shift();
        console.log(`Player 1 plays ${card1.name}, Player 2 plays ${card2.name}`);

        // Handle special conditions first
        if (card1.cast && card2.cast && 
            handleSpecialCondition(card1, card2, "✨ The spells collide and neutralize each other.")) {
            continue;
        }

        if (card1.name === card2.name && 
            handleSpecialCondition(card1, card2, "🤝 It's a tie!")) {
            continue;
        }

        if (isEnemy(card1) && isEnemy(card2) && 
            handleSpecialCondition(card1, card2, "🍺 Enemies go to take a butterbeer at Madam Rosmerta's!")) {
            continue;
        }

        // Combat logic
        if (card1.attack && card2.takeDamage) card1.attack(card2);
        if (card2.attack && card1.takeDamage) card2.attack(card1);
        if (card1.cast) card1.cast(card2);
        if (card2.cast) card2.cast(card1);
        
        if (card1.duel && card2.duel) {
            const winner = card1.duel(card2);
            console.log(`🏆 ${winner.name} wins the duel!`);
        }

        // Store cards and calculate points after combat
        if (card1.health !== undefined) playedCards.player1.push(card1);
        if (card2.health !== undefined) playedCards.player2.push(card2);

        playerOnePoints = calculatePoints(playerOneCards) + calculatePoints(playedCards.player1);
        playerTwoPoints = calculatePoints(playerTwoCards) + calculatePoints(playedCards.player2);
        
        console.log(`Player 1's total points: ${playerOnePoints}`);
        console.log(`Player 2's total points: ${playerTwoPoints}`);
    }
}

// Start game

let playerOneCards = createRandomCards();
let playerTwoCards = createRandomCards();

let playerOnePoints = calculatePoints(playerOneCards);
let playerTwoPoints = calculatePoints(playerTwoCards);

console.log(`Player 1's initial points: ${playerOnePoints}`);
console.log(`Player 2's initial points: ${playerTwoPoints}`);

// Play rounds
playRound(playerOneCards, playerTwoCards);

// Calculate final points including all played cards
playerOnePoints = calculatePoints(playerOneCards) + calculatePoints(playedCards.player1);
playerTwoPoints = calculatePoints(playerTwoCards) + calculatePoints(playedCards.player2);

// Final score
console.log("\n🎮 Game Over!");
console.log("Final Scores:");
console.log(`Player 1: ${playerOnePoints} points`);
console.log(`Player 2: ${playerTwoPoints} points`);

if (playerOnePoints > playerTwoPoints) {
    console.log("🏆 Player 1 wins the game!");
} else if (playerTwoPoints > playerOnePoints) {
    console.log("🏆 Player 2 wins the game!");
} else {
    console.log("🤝 The game ends in a tie!");
}
