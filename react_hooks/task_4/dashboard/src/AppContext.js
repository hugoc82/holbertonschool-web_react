// src/AppContext.js
// Pont de compatibilité pour les tests qui importent "../AppContext"
// Il ré-exporte simplement le contexte depuis ./App/AppContext.jsx

export { default } from "./App/AppContext.jsx";
export * from "./App/AppContext.jsx";
