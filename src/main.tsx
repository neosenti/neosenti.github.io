import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NeoSentiLanding from "./NeoSentiLanding.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NeoSentiLanding />
  </StrictMode>
);
