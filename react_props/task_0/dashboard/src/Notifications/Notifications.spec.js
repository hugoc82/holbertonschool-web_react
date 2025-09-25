import { render } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications", () => {
  it("render sans crash", () => {
    render(<Notifications />);
  });
});
