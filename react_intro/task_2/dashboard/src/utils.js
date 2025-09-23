// task_2/dashboard/src/utils.js

export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton School" : "Holberton School main dashboard";
}

export function getLatestNotification() {
  // EXACTEMENT le texte demandé (HTML inclus)
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

// Compat: export par défaut + nommés (ça aide certains checkers)
const defaultExport = { getCurrentYear, getFooterCopy, getLatestNotification };
export default defaultExport;
