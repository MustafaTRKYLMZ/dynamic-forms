import { Field } from "./field";

export type Event = {
  id: number;
  title: string;
  description: string;
  templateId: string;
  fields: Field[];
};
