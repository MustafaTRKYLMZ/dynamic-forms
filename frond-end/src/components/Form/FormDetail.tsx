import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { FormItem } from "./FormItem";

export const FormDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { templates } = useForm();
  const template = templates.find((template) => template.id === id);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  if (!template) {
    return <div>Form not found</div>;
  }

  const handleChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | { target: { name: string; value: any } }
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const newData = {
      ...formData,
      templateId: template.id,
    };
    // TODO add to backend
    const currentLocalStorage = localStorage.getItem("formValues");
    const currentData = currentLocalStorage
      ? JSON.parse(currentLocalStorage)
      : [];

    const updatedData = [...currentData, newData];
    localStorage.setItem("formValues", JSON.stringify(updatedData));
    alert("Form submitted successfully!");
  };

  return (
    <div className="formDetail">
      <div className="formDetailHeader">
        <h2>{template.title}</h2>
        <p>{template.description}</p>
      </div>

      {template.fields.map((field, index) => (
        <FormItem
          key={index}
          label={field.label}
          type={field.type}
          value={formData[field.label] || ""}
          handleChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
