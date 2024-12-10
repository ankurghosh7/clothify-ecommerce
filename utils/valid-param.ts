/**
 * Validates a parameter using a regular expression.
 * @param param - The parameter to validate.
 * @param regex - The regular expression to validate against.
 * @returns `true` if the parameter matches the regex, `false` otherwise.
 */
export function validateParam(param: string, regex: RegExp): boolean {
  return regex.test(param);
}

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const idRegex = /^[0-9a-fA-F]{24}$/;
export const nameRegex = /^[a-zA-Z0-9 ]{3,30}$/;
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const usernameRegex = /^[a-zA-Z0-9]{3,30}$/;
export const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
export const uuidRegex =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
export const phoneRegex = /^\+?[0-9]{1,3}-?[0-9]{3}-?[0-9]{3}-?[0-9]{4}$/;
export const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
export const timeRegex = /^\d{2}:\d{2}$/;
export const paramRegex = /^[a-zA-Z0-9_-]{3,30}$/;
