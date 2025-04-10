/**
 * @file first-version.js
 * @author Olga Kutuzova
 * @description 02-double-combo
 *
 * This is a turn-based combat simulation between Harry Potter and his friends,
 * and the enemies of Hogwarts. The game generates a queue of 10 random cards 
 * for each player, and each player plays a card on his turn. 
 * The cards can be characters, enemies, or spells.
 * The characters and enemies have different strength, health and defense points, 
 * and the spells make different damage.
 */

// Define the characters, enemies, and spells
const characters = [
    { 
        // A character card (object) with properties (name, strength, defense, health) 
        // and methods (attack, buff, takeDamage, duel)
        name: "Harry Potter", strength: 8, defense: 7, health: 100,
        // Attack method takes a target as an argument and reduces the target's health by the character's strength
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        // Buff method takes a target as an argument and increases the target's strength by 2
        buff(target) { target.strength += 2; },
        // TakeDamage method takes an amount as an argument and reduces the character's health by that amount
        takeDamage(amount) { this.health -= amount; },
        // Duel method takes an opponent as an argument and returns the character with the higher strength + defense
        duel(opponent) { return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; }
    },
    { 
        name: "Albus Dumbledore", strength: 10, defense: 9, health: 120,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        buff(target) { target.strength += 3; },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; }
    },
    { 
        name: "Ron Weasley", strength: 7, defense: 6, health: 90,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        buff(target) { target.strength += 1; },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; }
    },
    { 
        name: "Hermione Granger", strength: 7, defense: 8, health: 95,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        buff(target) { target.defense += 2; },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; }
    },
    { 
        name: "Minerva McGonagall", strength: 9, defense: 8, health: 110,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        buff(target) { target.defense += 3; },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; }
    },
    { 
        name: "Neville Longbottom", strength: 6, defense: 7, health: 85,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        buff(target) { target.health += 5; },
        takeDamage(amount) { this.health -= amount; },
        duel(opponent) { return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; }
    }
];

const enemies = [
    {   // An enemy card (object) with properties (name, strength, defense, health) 
        // and methods (attack, takeDamage)
        name: "Lord Voldemort", strength: 10, defense: 9, health: 120,
         // Attack method takes a target as an argument and reduces the target's health by the character's strength
         attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        // TakeDamage method takes an amount as an argument and reduces the character's health by that amount
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Bellatrix Lestrange", strength: 9, defense: 8, health: 110,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Lucius Malfoy", strength: 8, defense: 7, health: 100,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Draco Malfoy", strength: 7, defense: 6, health: 90,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Vincent Crabbe", strength: 6, defense: 5, health: 85,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        takeDamage(amount) { this.health -= amount; }
    },
    { 
        name: "Dolores Umbridge", strength: 5, defense: 5, health: 80,
        attack(target) { 
            const damage = this.strength - target.defense;
            if (damage > 0) {
                target.takeDamage(damage); 
            }
        },
        takeDamage(amount) { this.health -= amount; }
    }
];

const spells = [
    {   // A spell card (object) with properties (name, effect)
        // and methods (cast)
        name: "Avada Kedavra", effect: "instant_kill",
        // Cast method takes a target as an argument and changes the target's health based on spell effect
        cast(target) { target.health = 0; }
    },
    { 
        name: "Imperio", effect: "mind_control",
        cast(target) { target.strength -= 2; }
    },
    { 
        name: "Cruciatus", effect: "torture",
        cast(target) { target.health -= 20; }
    },
    { 
        name: "Sectumsempra", effect: "severe_damage",
        cast(target) { target.health -= 30; }
    },
    { 
        name: "Stupefy", effect: "stun",
        cast(target) { target.defense -= 2; }
    },
    {
        name: "Expelliarmus", effect: "expel",
        cast(target) { target.health -= 10; }
    }
];



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
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements at indices i and j
    }
}


/**
 * Creates an array of 15 random cards for each player.
 * @returns {array} An array of 15 random cards for each player.
 */
function createRandomCards() {
    const playerCards = [];
    
    // Generate 5 times 3 cards for each player, 1 character, 1 enemy, and 1 spell for each iteration.
    for (let i = 0; i < 5; i++) {
        let randomCharacter = characters[randInt(0, characters.length - 1)];
        let randomEnemy = enemies[randInt(0, enemies.length - 1)];
        let randomSpell = spells[randInt(0, spells.length - 1)];
        
        // Add the random cards to the playerCards array
        playerCards.push(randomCharacter);
        playerCards.push(randomEnemy);
        playerCards.push(randomSpell);
    }
    
    // Shuffle the array to mix up the cards
    shuffleArray(playerCards);
    return playerCards;
}

/**
 * Calculates the total points of the player's cards.
 * @param {array} playerCards - An array of player's cards.
 * @returns {number} The total points of the player's cards.
 */
function calculatePoints(playerCards) {
    return playerCards.reduce((total, card) => {
        // Only count points for characters and enemies (cards with health)
        if (card.health !== undefined && card.health > 0) {
            total += card.health;
        }
        return total;
    }, 0);
}

let playerOneCards = createRandomCards();
let playerTwoCards = createRandomCards();



// Initialize the players' scores
let playerOnePoints = calculatePoints(playerOneCards);
let playerTwoPoints = calculatePoints(playerTwoCards);

console.log(`Player 1's total points: ${playerOnePoints}`);
console.log(`Player 2's total points: ${playerTwoPoints}`)

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

        // Special cases that don't affect points
        if (card1.cast && card2.cast) {
            console.log("✨ The spells collide and neutralize each other.");
            continue;
        }

        // Combat logic
        if (enemies.includes(card1) && enemies.includes(card2)) {
            console.log("🍺 Enemies go to take a butterbeer at Madam Rosmerta's!");
            continue;
        }
        if (card1.attack && card2.takeDamage) card1.attack(card2);
        if (card2.attack && card1.takeDamage) card2.attack(card1);
        
        if (card1.cast) card1.cast(card2);
        if (card2.cast) card2.cast(card1);
        
        if (card1.duel && card2.duel) {
            const winner = card1.duel(card2);
            console.log(`🏆 ${winner.name} wins the duel!`);
        }
        if (card1.name === card2.name) {
            console.log("🤝 It's a tie!");
            continue;
        }
        console.log(`Player 1's ${card1.name} health: ${card1.health}`);
        console.log(`Player 2's ${card2.name} health: ${card2.health}`);

        // After each turn, calculate the current score
        // Calculate points only if cards have health (characters/enemies)
        playerOnePoints = calculatePoints(playerOneCards);
        playerTwoPoints = calculatePoints(playerTwoCards);
        
        if (card1.health !== undefined) playerOnePoints += Math.max(0, card1.health);
        if (card2.health !== undefined) playerTwoPoints += Math.max(0, card2.health);
        
        console.log(`Player 1's total points: ${playerOnePoints}`);
        console.log(`Player 2's total points: ${playerTwoPoints}`);
    }
    

}
playRound(playerOneCards, playerTwoCards);



// Add final game results
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
