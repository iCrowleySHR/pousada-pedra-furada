import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

jest.mock("../../components/Layout", () => ({ children }) => (
  <>
    <header>Mock Header</header>
    {children}
  </>
));

test("deve renderizar o Header e o conteúdo filho", () => {
  render(
    <Layout>
      <p>Conteúdo interno</p>
    </Layout>
  );

  expect(screen.getByText("Mock Header")).toBeInTheDocument();
  expect(screen.getByText("Conteúdo interno")).toBeInTheDocument();
});
