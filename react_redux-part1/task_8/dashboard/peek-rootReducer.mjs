import rootReducer from './src/app/rootReducer.js';
const s = rootReducer(undefined, { type: '@@INIT' });
console.log(Object.keys(s));
