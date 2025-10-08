/**
 * @file: main.ts
 * @author: Olga Kutuzova
 * Exercise 03-strange-kebab
 * In this script a method to convert strings into a modified kebab-case format is tested.
 * The method is added to the String prototype. The script is rewritten in TypeScript.
 */

export {};

declare global {
    interface String {
        toStrangeKebab(): string;
    }
}

/**
 * Converts a string to a modified kebab-case:
 * - Inserts a dash before each uppercase letter and lowercases it
 * - Keeps lowercase letters
 * - Keeps numbers if they are not at the start of the string
 * - Replaces all other characters (spaces, symbols) with a dash
 * - Reduces multiple dashes to a single one
 * - Trims leading/trailing dashes
 * @returns {string} The modified kebab-case string
 */
String.prototype.toStrangeKebab = function (): string {
    let str: string = this.toString();

    // Remove leading numbers
    str = str.replace(/^[0-9]+/, '');

    let result = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/[A-Z]/.test(char)) {
        result += '-' + char.toLowerCase();
        } else if (/[a-z0-9]/.test(char)) {
        result += char;
        } else {
        result += '-';
        }
  }

  // Remove multiple dashes
  result = result.replace(/-+/g, '-');
  // Trim leading/trailing dashes
  return result.replace(/^-|-$/g, '');
};


    
 
// Given the following array
const source: string[] = [
    'MyNameIsMyPassportVerifyMe',
    'My Name Is My Passport Verify Me MMM',
    ' -- -My?Name&*is**my$$Passport???p??',
    'mY--name--- is- - 2023---',
    'mynameismypassport',
    '2022 my name is',
    '2024-my-name-is'
   ];
source.forEach(item => console.log(item.toStrangeKebab()));
