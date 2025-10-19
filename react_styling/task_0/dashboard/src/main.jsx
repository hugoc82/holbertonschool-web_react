// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";

// Roboto - trois graisses requises
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Tailwind (v4) + thèmes via main.css
import "./main.css";

import App from "./App/App.jsx";
import "./Header/Header.css";
import "./Login/Login.css";
import "./Footer/Footer.css";

createRoot(document.getElementById("root")).render(<App />);
