import { useLocation } from "react-router-dom";
import { useState } from "react";
import { EventFormDetail } from "./EventFormDetail";

export const EventPreview = () => {
  const [info, setInfo] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const { newEvent } = location.state || {
    newEvent: "",
  };

  setTimeout(() => {
    setInfo("");
  }, 3000);
  setTimeout(() => {
    setError("");
  }, 3000);
  return (
    <div className="eventForm">
      {info && <div className="info">{info}</div>}
      {error && <div className="error">{error}</div>}
      <div className="eventDetailHeader">
        <h1>{newEvent.title}</h1>
        <h2>{newEvent.description}</h2>
      </div>
      <EventFormDetail
        templateId={newEvent.templateId}
        eventId={newEvent.id}
        setInfo={setInfo}
        setError={setError}
      />
    </div>
  );
};
