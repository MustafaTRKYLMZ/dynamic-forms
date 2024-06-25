import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { Event } from "../../types";
import { useEvent } from "../../contexts/EventContext";

export const CreateEvent = () => {
  const { addEvent } = useEvent();
  const [error, setError] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const navigate = useNavigate();
  const [eventDescription, setEventDescription] = useState("");
  const { templates } = useForm();

  const location = useLocation();
  const { templateId } = location.state || {
    templateId: "",
  };

  const [selectedTemplate, setSelectedTemplate] = useState(templateId);

  const handleTemplateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTemplate(e.target.value);
  };

  useEffect(() => {
    const selectedTemplate = templates.find(
      (template) => template.id === templateId
    );
    if (selectedTemplate) {
      setSelectedTemplate(selectedTemplate.id);
    } else {
      setSelectedTemplate(templates[0].id);
    }
  }, [templateId, templates]);

  const handleSubmit = () => {
    if (!eventTitle || !eventDescription) {
      setError("Please fill in all fields");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const newEvent: Event = {
      id: Math.floor(Math.random() * 10000),
      title: eventTitle,
      description: eventDescription,
      templateId: selectedTemplate,
      fields: [],
    };

    const events = localStorage.getItem("events");
    let currentEvents = [];
    try {
      currentEvents = events ? JSON.parse(events) : [];
      if (!Array.isArray(currentEvents)) {
        currentEvents = [];
      }
    } catch (error) {
      console.error("Failed to parse events from localStorage", error);
      currentEvents = [];
    }

    const updatedEvents = [...currentEvents, newEvent];
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    addEvent(newEvent);
    navigate(`/create-event/${newEvent.id}`, {
      state: { newEvent },
    });
  };

  return (
    <div>
      <h2>Create Event</h2>
      {error && <div className="error">{error}</div>}
      <div className="formDetail">
        <div className="formDetailField">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div className="formDetailField">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={(e) => setEventDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="formDetailField">
          <label htmlFor="template">Template</label>
          <select value={selectedTemplate} onChange={handleTemplateChange}>
            {templates.map((template) => (
              <option key={template.id} value={template.id}>
                {template.title}
              </option>
            ))}
          </select>
        </div>
        <button onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
};
