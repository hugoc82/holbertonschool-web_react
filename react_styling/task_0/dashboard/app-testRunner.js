import { readFileSync } from "fs";

const code = readFileSync("./src/App/App.jsx", "utf8");

// Quelques checks typiques des runners Holberton
const hasFragmentImport = /import\s+React,\s*\{\s*Fragment\s*\}\s+from\s+["\']react["\'];?/.test(code);
const hasNotificationsImport = /import\s+Notifications\s+from\s+["\']\.\.\/Notifications\/Notifications["\'];?/.test(code);
const hasHeaderImport = /import\s+Header\s+from\s+["\']\.\.\/Header\/Header["\'];?/.test(code);
const hasLoginImport  = /import\s+Login\s+from\s+["\']\.\.\/Login\/Login["\'];?/.test(code);
const hasFooterImport = /import\s+Footer\s+from\s+["\']\.\.\/Footer\/Footer["\'];?/.test(code);

// ordre exact dans le JSX
const jsxOrder = /<Fragment>\s*<Notifications\s*\/>\s*<Header\s*\/>\s*<Login\s*\/>\s*<Footer\s*\/>\s*<\/Fragment>/s.test(code);

// export par défaut d'un composant
const hasDefaultExport = /export\s+default\s+function\s+App\s*\(/.test(code) || /export\s+default\s+App\s*;?/.test(code);

if (hasFragmentImport && hasNotificationsImport && hasHeaderImport && hasLoginImport && hasFooterImport && jsxOrder && hasDefaultExport) {
  console.log("OK");
} else {
  console.log("NOK");
  console.log({
    hasFragmentImport,
    hasNotificationsImport,
    hasHeaderImport,
    hasLoginImport,
    hasFooterImport,
    jsxOrder,
    hasDefaultExport
  });
}
