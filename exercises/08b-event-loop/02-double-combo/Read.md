# Exercise: 02-double-combo

## Author Details
- **Name:** Olga Kutuzova  
- **Email:** olga.kutuzova@edu-its.it  
- **Course:** Web Developer 24-26


## Exercise Requirements
Create a simulation of a turn-based combat system in a Dungeons and Dragons 
game using two queues of cards
● the card types are
○ characters, spells, or enemies
● create two queues: one for each player's cards
● fill each queue with N random cards of different types
● each card should be an object with appropriate
○ properties e.g. strength, defense, health
○ methods e.g. attack(enemy), buff(character), damage(character), duel(character)
Turn-based Combat
● on each turn, draw one card from the start of each player's queue
● based on the type of cards drawn, certain combinations might trigger 
special actions or effects, such as:
○ Character vs. Enemy: Attack action, dealing damage to the enemy
○ Spell vs. Character: Buff action, boosting the character's attributes or Damage action, 
damaging or killing the character
○ Character vs. Character: Duel action, comparing attributes to determine the winner
○ Enemy vs. Enemy: No effect
● award points to each player based on the remaining health of their used character cards

 
## Solution
In the game, each player has a queue of cards. The cards are randomly selected from an array of characters, spells, and enemies. The game then proceeds in turns, where each player draws a card from their queue. Based on the type of cards drawn, certain combinations might trigger special actions or effects.

The game ends when players' queues are empty. The points are calculated based on the sum of health, defense, and strength of each character or enemy in an array. The player with the most remaining points wins.

Details:
The arrays of characters, spells and enemies are defined. Each array consists of objects with properties such as name, health, strength, defense. Each object also has methods. In case of characters, the methods are `attack()`, `takeDamage()`, `duel()`. For enemies: `attack()`, `takeDamage()`. For spells the method is `cast()`.  

The buff method for the characters was not implemented, as it is not clear how to handle buffing in case of an enemy or a spell card.   

A shortened syntax for the methods was used avoiding the repetition of the function keyword.     

``` JavaScript
attack(target) {
    const damage = this.strength - target.defense;
    if (damage > 0) target.takeDamage(damage);
}
```
The method `attack()` takes a 'target' parameter, which is the card at attack. The damage is calculated subtracting the defense of the target from the strength of the attacker. If the damage is greater than 0, the method `takeDamage()` is called on the target with the calculated damage.

For example:

- If Harry Potter (strength: 8) attacks Draco Malfoy (defense: 6)
  - damage = 8 - 6 = 2
  - Draco takes 2 damage points

``` JavaScript
duel(opponent) { 
    return this.strength + this.defense > opponent.strength + opponent.defense ? this : opponent; 
}
```
The method `duel()` takes an opponent - another character card. Then the total of strength and defense is calculated for each character. The character with the highest total is returned as the winner. The ternary operator is used to return the winner. At the same time the health points will be deducted from the health of the losing player as both cards can cause damage.

For example:

- If Harry Potter (strength: 8, defense: 7) duels Neville (strength: 6, defense: 7)
  - Harry's total = 8 + 7 = 15
  - Neville's total = 6 + 7 = 13
  - Harry wins because 15 > 13

For the spells, each one has a name, an effect, and a method cast(). The method `cast()` takes a target parameter, which is the card at attack. The if statement checks that a card has a valid strength property, from which then the damage depending on the type of spell is subtracted. 

For example:

- If a player casts the spell "Expelliarmus" on Draco Malfoy
  - "Expelliarmus" has an effect of "expel"
  - Draco takes 10 damage points

Then the helper functions are implemented. First one is `randInt()` - a function that generates a random integer between a given minimum and maximum value.  
The second one is `shuffle()` - a function that shuffles an array randomly.   The third one is `createRandomCards()` - a function that creates a player's array with an empty queue. In a for loop the three cards of each type are selected randomly and added to the player's array. 

The spread operator ( ... ) is crucial here because without it, we'd just be creating references to the original character objects. This means all players would share the same character instances, and when one player's character takes damage, it would affect that same character for all other players.
So if Harry Potter gets damaged in one game, that same Harry Potter would be damaged everywhere.

With spread operator:

```javascript
const randomCharacter = { ...characters[randInt(0, characters.length - 1)] };
 ```


This creates a new copy of the character, so each player gets his own independent instance of Harry Potter with its own health, strength, and defense values.

The same applies to enemies and spells -  each card is an independent copy so that changes to one card don't affect other instances of the same character/enemy/spell in the game.  

The created array is shuffled for the random order. 

Function `calculateHealthPoints()` is implemented. It takes an array of playerCards as a parameter. Then, to sum up the points the `reduce()` method is used. It starts with initial value of 0, for each card the check on health property is conducted, as well as if the health value is greater than 0. If both conditions are met, the card's health value is added to the accumulator. The result is returned. This guarantees that the spells are skipped and defeated characters or enemies too.  The same logic is used for calculating the points for strength and defense. In the end, the total points (health, defense, strength) are returned. Thus, the damage dealt by spells when damaging strength or defense is also taken into account.

The function `isEnemy()` is implemented. It takes a card as a parameter and returns true if the card is an enemy, false otherwise. This is needed in the playround in order to check if the card is an enemy and if so, skip the duel. If both cards are enemies, another log is displayed.


The `handleSpecialCondition` function manages special combat scenarios in the Harry Potter card game. It handles three specific cases:

1. When two spells collide (both players play spell cards)
2. When identical cards are played (same character or enemy)
3. When two enemy cards meet

Functionality:
- Displays the appropriate message for the special condition
- Stores cards with health points in the played cards collection
- Calculates and updates both players' points
- Returns `true` if a special condition was handled, `false` otherwise

Points Calculation
The function maintains the running total of points by:
- Adding points from cards with remaining health
- Including strength and defense points from active cards
- Updating the score display after each special condition

This handler helps maintain game balance and adds thematic elements to the combat system, such as enemies choosing to have butterbeer together instead of fighting.

The function `playRound()` is implemented. It takes two playerCards arrays as parameters. In an object playedCards the used cards are stored in two arrays. 
A while loop controls if there are still cards in both playerCards arrays. The variable round is changed respectively to the round number. 
The cards are drawn from the start of each player's queue using the `shift()` method. The special conditions are handled. If they are met the loop will go for the next iteration. The first if statement checks if the drawn cards are both spells, then the respective output is made. Another if statement controls if both cards are of the same character. Finally, third one checks if both cards are enemies. 

If none of the conditions are met, the combat logic is handled in the following way:

1. Attack Phase :
   
   - Checks if card1 can attack (has attack method) and card2 can take damage
   - If true, card1 attacks card2
   - Same check for card2 attacking card1
   - Both cards can attack each other in the same round
2. Spell Phase :
   
   - If card1 is a spell (has cast method), it casts on card2
   - If card2 is a spell, it casts on card1
   - Spells can affect characters/enemies by reducing health, strength, or defense
3. Duel Phase :
   
   - Only happens if both cards have duel method (characters only)
   - Compares total power (strength + defense) of both cards
   - Announces the winner
For example:

- If Harry Potter faces Voldemort:
  - Both attack each other
  - No spells are cast
  - No duel (enemies can't duel)
- If Expelliarmus faces Harry Potter:
  - No attacks
  - Spell is cast on Harry
  - No duel

  The played cards are stored for the points calculation, excluding the spells as they do not have the health property. 
  The state of total points for both players is demonstrated every round. 
  The points are tracked by calculating remaining health after each round:

```javascript
// Calculate current points including played cards
playerOnePoints = calculatePoints(playerOneCards) + calculatePoints(playedCards.player1);
playerTwoPoints = calculatePoints(playerTwoCards) + calculatePoints(playedCards.player2);
 ```


## Files:
- `index.html` - Basic HTML structure.
- `main.js` - JavaScript.
- `Read.md` - exercise requirements and solution. 
