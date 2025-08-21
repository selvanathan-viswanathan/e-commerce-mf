import React from "react";
import ReactDOM from "react-dom/client";
import Host from "./Host";

// Typical React 18 entry point with TS
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Host />
  </React.StrictMode>,
);
