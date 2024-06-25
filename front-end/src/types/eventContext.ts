import { Event } from "./event";
export type EventContextProps = {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
};
