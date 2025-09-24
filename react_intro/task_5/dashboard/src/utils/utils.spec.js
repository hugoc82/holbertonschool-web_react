/* eslint-env jest */
import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils", () => {
  test("getCurrentYear returns current year", () => {
    expect(getCurrentYear()).toBe(new Date().getFullYear());
  });
  test("getFooterCopy true/false", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });
  test("getLatestNotification exact", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
