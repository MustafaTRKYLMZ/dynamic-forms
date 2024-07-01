import { Request, Response } from "express";
import EventModel from "../models/Event";

export const createEvent = async (req: Request, res: Response) => {
  const { title, description, fields, templateId } = req.body;

  if (!title || !description || !fields || !templateId) {
    return res.status(400).json({
      message: "Title, description, fields, and templateId are required",
    });
  }

  try {
    const newEvent = new EventModel({ title, description, fields, templateId });
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    console.error("Error in createEvent:", err);
    res.status(500).json({ error: err });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  console.log("get routes working");
  try {
    const events = await EventModel.find();
    res.json(events);
  } catch (err) {
    res
      .status(404)
      .json({ error: `There are error while geting data: ${err}` });
  }
};
