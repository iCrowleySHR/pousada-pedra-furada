import React from "react"; 

export default function Footer() {
    return (
        <>
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
        </>
    );
}