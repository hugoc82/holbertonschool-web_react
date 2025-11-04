import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import mockAxios from "axios"; // mappé vers jest-mock-axios
import App from "./App";

describe("App (hooks) — data fetching side effects", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test("fetches notifications on initial load and renders items", async () => {
    render(<App />);

    // L’app appelle /notifications.json au montage
    expect(mockAxios.get).toHaveBeenCalledWith("/notifications.json");

    // On simule la réponse
    mockAxios.mockResponse({
      data: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: true }, // sera remplacé par getLatestNotification()
      ],
    });

    // Le texte générique est là quelle que soit la liste
    expect(
      await screen.findByText(/here is the list of notifications/i)
    ).toBeInTheDocument();

    // Et au moins un item texte simple
    expect(screen.getByText(/new course available/i)).toBeInTheDocument();
  });

  test("fetches courses whenever user state changes (login)", async () => {
    render(<App />);

    // 1) Réponse notifications (sinon la requête reste en attente)
    mockAxios.mockResponse({ data: [] });

    // 2) Simuler un login via le formulaire
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "john@doe.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "pwd123" },
    });
    fireEvent.click(screen.getByRole("button", { name: /ok/i }));

    // Après login, l’app doit fetch /courses.json
    expect(mockAxios.get).toHaveBeenCalledWith("/courses.json");

    // On renvoie des cours
    mockAxios.mockResponse({
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
      ],
    });

    // On peut juste vérifier qu'il n'y a pas d’erreurs et que le composant continue de fonctionner
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
  });
});
