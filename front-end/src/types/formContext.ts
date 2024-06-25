import { FormTemplate } from "./formTemplate";

export type FormContextProps = {
  templates: FormTemplate[];
  addTemplate: (template: FormTemplate) => void;
};
