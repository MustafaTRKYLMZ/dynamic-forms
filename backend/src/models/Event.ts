import { Document, Schema, model } from "mongoose";

interface IField {
  label: string;
  type: string;
  value: string;
  error?: string;
  options?: string[];
}

export interface IEvent extends Document {
  title: string;
  description: string;
  fields: IField[];
  templateId: string;
}

const FieldSchema: Schema = new Schema({
  label: { type: String },
  type: { type: String },
  value: { type: String },
  error: { type: String },
  options: { type: [String] },
});

const EventSchema: Schema = new Schema({
  title: { type: String },
  description: { type: String },
  fields: { type: [FieldSchema] },
  templateId: { type: String },
});

export default model("Event", EventSchema);
