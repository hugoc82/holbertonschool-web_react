import React from "react";
import { render, screen, rerender, cleanup } from "@testing-library/react";
import Notifications from "./Notifications";

/**
 * Deux tests "contenu" pour vérifier l'optimisation:
 * - ne re-render PAS si la longueur reste identique
 * - re-render SI la longueur change
 *
 * On contrôle cela via le DOM rendu (RTL best practice).
 */

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

describe("Notifications (task_5) - shouldComponentUpdate based on length", () => {
  test("does NOT re-render when notifications length stays the same", () => {
    const first = [
      { id: 1, type: "default", value: "A" },
      { id: 2, type: "urgent", value: "B" },
    ];

    const { rerender } = render(
      <Notifications displayDrawer={true} notifications={first} />
    );

    // Contenu initial
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();

    // Nouvelle prop de même longueur, contenu différent
    const secondSameLen = [
      { id: 3, type: "default", value: "C" },
      { id: 4, type: "urgent", value: "D" },
    ];

    rerender(<Notifications displayDrawer={true} notifications={secondSameLen} />);

    // Comme shouldComponentUpdate renvoie false (longueur égale),
    // le DOM ne doit pas être mis à jour => on voit toujours A et B,
    // et on NE voit pas C/D.
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.queryByText("C")).not.toBeInTheDocument();
    expect(screen.queryByText("D")).not.toBeInTheDocument();
  });

  test("re-renders when notifications length changes", () => {
    const first = [
      { id: 1, type: "default", value: "A" },
      { id: 2, type: "urgent", value: "B" },
    ];

    const { rerender } = render(
      <Notifications displayDrawer={true} notifications={first} />
    );

    expect(screen.getAllByRole("listitem").length).toBe(2);
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();

    // Longueur change (2 -> 3)
    const longer = [
      { id: 3, type: "default", value: "C" },
      { id: 4, type: "urgent", value: "D" },
      { id: 5, type: "default", value: "E" },
    ];

    rerender(<Notifications displayDrawer={true} notifications={longer} />);

    // Le DOM doit être mis à jour
    expect(screen.getAllByRole("listitem").length).toBe(3);
    expect
