import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import "./styles.css";

import { FormProvider } from "./contexts/FormContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormProvider>
      <App />
    </FormProvider>
  </React.StrictMode>
);
