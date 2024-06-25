import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FormItem } from "./FormItem";
import { useForm } from "../../contexts";

export const FormDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [info, setInfo] = useState("");
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

    const currentLocalStorage = localStorage.getItem("formValues");
    const currentData = currentLocalStorage
      ? JSON.parse(currentLocalStorage)
      : [];

    const updatedData = [...currentData, newData];
    localStorage.setItem("formValues", JSON.stringify(updatedData));
    setInfo("Form submitted successfully!");
  };
  setTimeout(() => {
    setInfo("");
  }, 3000);
  return (
    <div className="formDetail">
      <h1>Form Template Preview</h1>
      <div className="formDetailHeader">
        {info && <div className="info">{info}</div>}
        <h2>{template.title}</h2>
        <p>{template.description}</p>
      </div>

      {template.fields.map((field, index) => (
        <FormItem
          key={index}
          label={field.label}
          type={field.type}
          options={field.options}
          value={formData[field.label] || ""}
          handleChange={handleChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
