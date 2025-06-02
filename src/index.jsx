// 컴포넌트와 웹 브라우저 사이 다리역할
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
console.log(root);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
