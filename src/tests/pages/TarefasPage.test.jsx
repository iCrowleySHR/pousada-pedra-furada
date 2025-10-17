import { render, screen, fireEvent, within } from "@testing-library/react";
import TarefasPage from "../../pages/TarefasPage";

test("deve atualizar o status da tarefa para 'Em andamento' ao clicar no botão pela primeira vez", () => {
  render(<TarefasPage />);

  const botoesAtualizar = screen.getAllByText("Atualizar");
  fireEvent.click(botoesAtualizar[0]); // primeiro clique

  const tarefas = screen.getAllByRole("listitem");
  const primeiraTarefa = tarefas[0];

  expect(within(primeiraTarefa).getByText("Em andamento")).toBeInTheDocument();
});

test("deve atualizar o status da tarefa para 'Concluída' após dois cliques", () => {
  render(<TarefasPage />);

  const botoesAtualizar = screen.getAllByText("Atualizar");
  fireEvent.click(botoesAtualizar[0]); // primeiro clique
  fireEvent.click(botoesAtualizar[0]); // segundo clique

  const tarefas = screen.getAllByRole("listitem");
  const primeiraTarefa = tarefas[0];

  expect(within(primeiraTarefa).getByText("Concluída")).toBeInTheDocument();
});
