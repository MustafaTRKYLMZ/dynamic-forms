import React from "react";
import { useEvent } from "../../contexts/EventContext";
import { DynamicTable } from "../../data";

export const EventList: React.FC = () => {
  const { events } = useEvent();

  return (
    <div className="eventList">
      <h1>Event List</h1>
      <DynamicTable data={events} endpoint="event-list" />
    </div>
  );
};
