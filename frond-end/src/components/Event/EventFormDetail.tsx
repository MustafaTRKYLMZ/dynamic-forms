import React, { useState } from "react";
import { useForm } from "../../contexts/FormContext";
import { FormItem } from "../Form/FormItem";
import { EventFormDetailProps } from "../../types";
import { useEvent } from "../../contexts/EventContext";

export const EventFormDetail: React.FC<EventFormDetailProps> = ({
  templateId,
  eventId,
  setInfo,
  setError,
}) => {
  const { updateEvent } = useEvent();
  const { templates } = useForm();
  const template = templates.find((template) => template.id === templateId);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  if (!template) {
    return <div>Template not found</div>;
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (Object.keys(formData).length !== template.fields.length) {
      setError("Please fill all fields");
      return;
    }

    // Read current data from local storage
    const currentLocalStorage = localStorage.getItem("events");
    const currentData = currentLocalStorage
      ? JSON.parse(currentLocalStorage)
      : [];

    // Find the event to update
    const eventIndex = currentData.findIndex(
      (event: any) => event.id === eventId
    );

    if (eventIndex !== -1) {
      // Event exists, append the new form data to the existing fields
      currentData[eventIndex].fields = currentData[eventIndex].fields || [];
      currentData[eventIndex].fields.push(formData);
    } else {
      setError("Event not found");
      return;
    }
    // Save updated data back to local storage
    localStorage.setItem("events", JSON.stringify(currentData));
    updateEvent(currentData[eventIndex]);
    setInfo("Form submitted successfully!");
    setFormData({});
  };

  const handleField = (label: string, field: string) => {
    setFormData({
      ...formData,
      [label]: field,
    });
  };

  return (
    <div className="formDetail">
      {template?.fields.map((field, index) => {
        return (
          <FormItem
            key={index}
            label={field.label}
            type={field.type}
            options={field.options}
            value={formData[field.label] || ""}
            handleChange={handleChange}
            handleLocation={handleField}
          />
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
