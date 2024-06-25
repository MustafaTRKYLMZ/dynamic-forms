import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components";
import { AppRoutes } from "./routes";
import { FormProvider } from "./contexts/FormContext";
import { EventProvider } from "./contexts/EventContext";

const App: React.FC = () => {
  return (
    <Router>
      <FormProvider>
        <EventProvider>
          <div className="container">
            <Header />
            <AppRoutes />
          </div>
        </EventProvider>
      </FormProvider>
    </Router>
  );
};

export default App;
