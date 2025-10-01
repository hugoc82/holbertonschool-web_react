import { readFileSync } from "fs";

const code = readFileSync("./src/Header/Header.spec.js", "utf8");

// Checks typiques du runner
const importsOk =
  /import\s+Header\s+from\s+["']\.\/Header["']\s*;?/.test(code) &&
  /@testing-library\/react/.test(code) &&
  /@testing-library\/jest-dom/.test(code);

const testLogo =
  /test\s*\(\s*["']Check whether the Header component contains the Holberton logo\.["']/.test(code) ||
  /logo/i.test(code) && /getByAltText\s*\(\s*\/Holberton School logo\/i\s*\)/.test(code);

const testHeading =
  /test\s*\(\s*["']Check whether the Header component contains the heading h1 element with the correct text\.["']/.test(code) ||
  /getByRole\s*\(\s*["']heading["']\s*,\s*\{\s*level:\s*1\s*,\s*name:\s*\/School dashboard\/i\s*\}\s*\)/.test(code);

if (importsOk && testLogo && testHeading) {
  console.log("OK");
} else {
  console.log("NOK");
  console.log({ importsOk, testLogo, testHeading });
}
