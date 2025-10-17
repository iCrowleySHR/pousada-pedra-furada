// Importa matchers extras para o Testing Library (ex: toBeInTheDocument)
import "@testing-library/jest-dom";

// Polyfill para TextEncoder/TextDecoder (se precisar)
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;

// Silencia warnings específicos do React (opcional)
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("using an outdated JSX transform")
  ) {
    return;
  }
  originalWarn(...args);
};
