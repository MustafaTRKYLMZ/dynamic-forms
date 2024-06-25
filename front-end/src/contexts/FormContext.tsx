import React, { createContext, useContext, useEffect, useState } from "react";
import { FormTemplate } from "../types";
import { FormContextProps } from "../types/formContext";
import { mockTemplates } from "../mock/mockTemplate";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../helpers";

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [templates, setTemplates] = useState<FormTemplate[]>([]);

  useEffect(() => {
    const templates = getItemFromLocalStorage("formTemplates");
    if (templates.length > 0) {
      setTemplates(templates);
    } else {
      setTemplates(mockTemplates);
    }
  }, []);

  const addTemplate = (template: FormTemplate) => {
    const templates = getItemFromLocalStorage("formTemplates");
    const updatedTemplates = [...templates, template];
    setItemToLocalStorage("formTemplates", updatedTemplates);
    setTemplates(updatedTemplates);
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
