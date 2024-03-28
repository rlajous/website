// utils/getEnv.ts

/**
 * Retrieves an environment variable by name and ensures it is defined.
 * @param {string} name The name of the environment variable.
 * @returns {string} The value of the environment variable.
 * @throws {Error} Throws an error if the environment variable is not found.
 */
function getEnv(name: string): string {
  const value = process.env[name];
  if (value === undefined) {
    throw new Error(`Environment variable ${name} is missing`);
  }
  return value;
}

export default getEnv;
