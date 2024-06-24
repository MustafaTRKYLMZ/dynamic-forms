import React, { useState } from "react";
import { useForm } from "../../contexts/FormContext";
import { FormItem } from "../Form/FormItem";
import { EventFormDetailProps } from "../../types";
import { useEvent } from "../../contexts/EventContext";

export const EventFormDetail: React.FC<EventFormDetailProps> = ({
  templateId,
  eventId,
  setInfo,
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
    console.log("e>>", e);
    console.log("event target name/*8*******************", e.target.name);
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (Object.keys(formData).length !== template.fields.length) {
      alert("Please fill all fields");
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
      alert("Event not found");
      return;
    }
    // Save updated data back to local storage
    localStorage.setItem("events", JSON.stringify(currentData));
    updateEvent(currentData[eventIndex]);
    setInfo("Form submitted successfully!");
    setFormData({});
  };

  const handleLocation = (label: string, address: string) => {
    console.log(
      "handle location in event form detail >>>>>>>",
      label,
      "address",
      address
    );
    setFormData({
      ...formData,
      [label]: address,
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
            value={formData[field.label] || ""}
            handleChange={handleChange}
            handleLocation={handleLocation}
          />
        );
      })}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
