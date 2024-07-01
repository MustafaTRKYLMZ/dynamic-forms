import { Schema, model } from "mongoose";

const TemplateSchema = new Schema({
  title: { type: String, required: true },
  fields: { type: Array, required: true },
});

export default model("Template", TemplateSchema);
