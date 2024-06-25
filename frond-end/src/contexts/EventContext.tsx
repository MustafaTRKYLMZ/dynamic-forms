import React, { createContext, useContext, useEffect, useState } from "react";
import { Event } from "../types";
import { EventContextProps } from "../types/eventContext";
import { mockEvents } from "../mock";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../helpers";

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const eventsData = getItemFromLocalStorage("events");

    if (eventsData.length > 0) {
      setEvents(eventsData);
    } else {
      setEvents(mockEvents);
    }
  }, []);

  const addEvent = (event: Event) => {
    setEvents([event]);
  };
  const updateEvent = (updatedEvent: Event) => {
    const events = getItemFromLocalStorage("events") as Event[];
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );

    setItemToLocalStorage("events", updatedEvents);

    setEvents(updatedEvents);
  };
  return (
    <EventContext.Provider value={{ events, addEvent, updateEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};
