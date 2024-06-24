import React from "react";
import { useEvent } from "../../contexts/EventContext";
import { DynamicTable } from "../Data";

export const EventList: React.FC = () => {
  const { events } = useEvent();

  return (
    <div>
      <h1>Event List</h1>
      <DynamicTable data={events} endpoint="event-list" />
    </div>
  );
};
