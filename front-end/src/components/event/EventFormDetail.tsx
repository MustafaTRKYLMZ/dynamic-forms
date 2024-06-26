import React, { useState } from "react";
import { useForm } from "../../contexts/FormContext";
import { FormItem } from "../form/FormItem";
import { EventFormDetailProps } from "../../types";
import { useEvent } from "../../contexts/EventContext";
import { getItemFromLocalStorage } from "../../helpers";

export const EventFormDetail: React.FC<EventFormDetailProps> = ({
  templateId,
  eventId,
  setInfo,
  setError,
}) => {
  const { updateEvent } = useEvent();
  const [isSumitted, setIsSubmitted] = useState(false);

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

    const currentData = getItemFromLocalStorage("events");
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

    updateEvent(currentData[eventIndex]);
    setInfo("Form submitted successfully!");
    setFormData({});

    // Reset phone inputs
    setIsSubmitted(true);
  };

  const handleField = (label: string, field: string) => {
    setFormData({
      ...formData,
      [label]: field,
    });
  };

  return (
    <div className="formDetail">
      {template.fields.map((field, index) => (
        <FormItem
          key={index}
          label={field.label}
          type={field.type}
          options={field.options}
          value={formData[field.label] || ""}
          handleChange={handleChange}
          handleLocation={handleField}
          handlePhone={handleField}
          isSubmitted={isSumitted}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
