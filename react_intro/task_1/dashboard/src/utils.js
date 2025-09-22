// task_1/dashboard/src/utils.js

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

// ✅ Compatibilité maximale : export par défaut + exports nommés
const defaultExport = { getCurrentYear, getFooterCopy };
export default defaultExport;
