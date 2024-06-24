import React, { createContext, useContext, useEffect, useState } from "react";
import { FormTemplate } from "../types";
import { FormContextProps } from "../types/formContext";

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [templates, setTemplates] = useState<FormTemplate[]>([]);
  const templatesData = localStorage.getItem("formTemplates");
  const templatesFromLocal = templatesData ? JSON.parse(templatesData) : null;

  useEffect(() => {
    if (templatesData) {
      setTemplates(templatesFromLocal);
    }
  }, []);

  const addTemplate = (template: FormTemplate) => {
    setTemplates([...templates, template]);
    // save to backend

    localStorage.setItem(
      "formTemplates",
      JSON.stringify([...templates, template])
    );
  };

  return (
    <FormContext.Provider value={{ templates, addTemplate }}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
