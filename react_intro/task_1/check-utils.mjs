import utilDefault, {
  getCurrentYear,
  getFooterCopy,
} from "./dashboard/src/utils.js";

console.log("named year:", getCurrentYear());
console.log("named index:", getFooterCopy(true));
console.log("named main:", getFooterCopy(false));

console.log("default year:", utilDefault.getCurrentYear());
console.log("default index:", utilDefault.getFooterCopy(true));
console.log("default main:", utilDefault.getFooterCopy(false));
