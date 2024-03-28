/**
 * Retrieves the value of an environment variable, ensuring it is not undefined.
 *
 * This function takes a value that represents the environment variable and the
 * name of the variable for error messaging. If the environment variable is found
 * (i.e., the value is not undefined), it returns the value as a string. If the
 * environment variable is not set (i.e., the value is undefined), it throws an error
 * indicating which environment variable is missing.
 *
 * This approach is particularly useful in Next.js applications for safely accessing
 * environment variables on the server-side or exposing them to the browser as needed.
 * For more information on configuring and using environment variables in Next.js,
 * refer to the official documentation:
 * https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
 *
 * @param {string | undefined} variable - The value of the environment variable.
 * @param {string} name - The name of the environment variable, used for error messages.
 * @returns {string} The value of the environment variable as a string.
 * @throws {Error} Throws an error if the environment variable is undefined.
 */
function getEnv(variable: string | undefined, name: string): string {
  if (variable === undefined) {
    throw new Error(`Environment variable ${name} is missing.`);
  }
  return variable;
}

export default getEnv;
