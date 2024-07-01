import { Request, Response } from "express";
import Template from "../models/Template";

export const createTemplate = async (req: Request, res: Response) => {
  const { title, fields } = req.body;
  try {
    const newTemplate = new Template({ title, fields });
    const savedTemplate = await newTemplate.save();
    res.json(savedTemplate);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const getTemplates = async (req: Request, res: Response) => {
  try {
    const templates = await Template.find();
    res.json(templates);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
