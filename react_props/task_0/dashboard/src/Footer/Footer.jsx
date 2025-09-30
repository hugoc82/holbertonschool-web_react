import React from "react";
import { getFullYear, getFooterCopy } from "../utils/utils";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </footer>
  );
}
