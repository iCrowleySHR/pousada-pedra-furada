import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./src/components/Layout";
import LoginPage from "./src/pages/LoginPage";
import TarefasPage from "./src/pages/TarefasPage";
import RelatoriosPage from "./src/pages/RelatoriosPage";

export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/tarefas" element={<TarefasPage />} />
                <Route path="/relatorios" element={<RelatoriosPage />} />
                <Route path="*" element={<h2>Página não encontrada</h2>} />
            </Routes>
        </Layout>
    );
}