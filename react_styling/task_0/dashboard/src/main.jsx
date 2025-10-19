// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";

// Roboto 400/500/700
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Tailwind + thème
import "./main.css";

import App from "./App/App.jsx";
import "./Header/Header.css";
import "./Login/Login.css";
import "./Footer/Footer.css";

createRoot(document.getElementById("root")).render(<App />);
