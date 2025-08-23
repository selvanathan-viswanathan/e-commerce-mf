import React from "react";
import ReactDOM from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import Checkout from "./Checkout";

// Typical React 18 entry point with TS
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MemoryRouter>
      <Checkout />
    </MemoryRouter>
  </React.StrictMode>,
);
