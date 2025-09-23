/* eslint-env jest */
import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("utils functions", () => {
  test("getCurrentYear returns the current year (no time bomb)", () => {
    const current = new Date().getFullYear();
    expect(getCurrentYear()).toBe(current);
  });

  test("getFooterCopy returns 'Holberton School' when true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  test("getFooterCopy returns 'Holberton School main dashboard' when false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  test("getLatestNotification returns the expected HTML string", () => {
    expect(getLatestNotification()).toBe(
      "<strong>Urgent requirement</strong> - complete by EOD"
    );
  });
});
