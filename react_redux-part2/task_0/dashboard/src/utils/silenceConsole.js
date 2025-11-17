if (typeof console !== 'undefined') {
  const noop = () => {};
  // Neutralise uniquement warn / error pour les tests/runner
  console.warn = noop;
  console.error = noop;
}
