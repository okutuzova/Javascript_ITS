/**
 * Custom error class for invalid password errors.
 * @extends {Error}
 */
export class PasswordError extends Error {
  /**
   * Creates a new PasswordError.
   * @param {string} reason - The reason why the password is invalid.
   */
  constructor(reason: string) {
    super(`Invalid password format - ${reason}`);
    this.name = "PasswordError";
  }
}

/**
 * Validates a password against specific security rules.
 *
 * Checks:
 * - At least 8 characters long
 * - At least one uppercase letter
 * - At least one lowercase letter
 * - At least one digit
 * - At least one symbol
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} Returns true if the password meets all requirements.
 * @throws {PasswordError} Throws if the password does not meet one of the rules.
 */
export function validatePassword(password: string): boolean {
  if (password.length < 8) throw new PasswordError("too short");
  if (!/[A-Z]/.test(password)) throw new PasswordError("no uppercase letter");
  if (!/[a-z]/.test(password)) throw new PasswordError("no lowercase letter");
  if (!/[0-9]/.test(password)) throw new PasswordError("no digit");
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) throw new PasswordError("no symbol");

  return true;
}
