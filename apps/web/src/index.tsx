import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import { Layout } from "./components/Layout";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>,
);
