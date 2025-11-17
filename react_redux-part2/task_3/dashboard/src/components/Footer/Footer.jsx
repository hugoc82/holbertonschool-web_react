import React from "react";
import { StyleSheet, css } from "aphrodite";
import { getCurrentYear, getFooterCopy } from "../../utils/utils";

const styles = StyleSheet.create({
  footer: {
    borderTop: "1px solid #e0e0e0",
    padding: "10px",
    textAlign: "center",
    fontSize: "12px",
    fontStyle: "italic",
  },
});

export default function Footer() {
  return (
    <div className={css(styles.footer)}>
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
      <p>
        <a href="#contact">Contact us</a>
      </p>
    </div>
  );
}
