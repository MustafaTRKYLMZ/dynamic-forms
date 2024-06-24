import { Field } from "./field";

export type FormTemplate = {
  id: string;
  title: string;
  description: string;
  fields: Field[];
};
