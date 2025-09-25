import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("affiche le titre", () => {
    render(<Header />);
    expect(screen.getByRole("heading", { name: /school dashboard/i })).toBeInTheDocument();
  });
});
