import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ padding: "1rem" }}>
        {children}
      </main>
      <footer
        style={{
          background: "#234",
          color: "#fff",
          textAlign: "center",
          padding: "0.5rem",
          marginTop: "1rem",
        }}
      >
        © {new Date().getFullYear()} Pousada Pedra Furada
      </footer>
    </div>
  );
}
