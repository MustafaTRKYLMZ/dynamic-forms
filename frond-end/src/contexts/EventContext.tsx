import React, { createContext, useContext, useEffect, useState } from "react";
import { Event } from "../types";
import { EventContextProps } from "../types/eventContext";
import { mockEvents } from "../mock";

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const eventsData = localStorage.getItem("events");

    if (eventsData) {
      setEvents(JSON.parse(eventsData));
    } else {
      setEvents(mockEvents);
    }
  }, []);

  const addEvent = (event: Event) => {
    const updatedEvents = [...events, event];
    setEvents(updatedEvents);
    // localStorage.setItem("events", JSON.stringify(updatedEvents));
  };
  const updateEvent = (updatedEvent: Event) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
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
