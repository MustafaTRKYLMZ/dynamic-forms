import React, { useState } from "react";
// import axios from "axios";
import { useForm } from "../../contexts/FormContext";
import { MdDeleteForever } from "react-icons/md";

export const FormTemplate: React.FC = () => {
  const { addTemplate } = useForm();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState<
    {
      label: string;
      type: string;
      value?: string;
      error?: string;
      githubData?: any;
    }[]
  >([]);

  const addField = () => {
    setFields([...fields, { label: "", type: "text" }]);
  };

  const handleFieldChange = (
    index: number,
    field: Partial<(typeof fields)[number]>
  ) => {
    const newFields = [...fields];
    newFields[index] = { ...newFields[index], ...field };
    setFields(newFields);
  };

  const handleSubmit = () => {
    const hasGitHubError = fields.some(
      (field) => field.type === "github" && field.error
    );
    if (hasGitHubError) {
      alert("Please enter valid GitHub usernames.");
      return;
    }

    const newTemplate = {
      id: Date.now().toString(),
      title,
      description,
      fields,
    };

    addTemplate(newTemplate);
    setTitle("");
    setDescription("");
    setFields([]);
  };

  const handleDelete = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
  };

  return (
    <div className="template">
      <h2>Create Form Template</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Form Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Form Description"
      ></textarea>
      <div className="templateBody">
        {fields.map((field, index) => (
          <div key={index} className="formTemplateField">
            <input
              type="text"
              value={field.label}
              onChange={(e) =>
                handleFieldChange(index, { label: e.target.value })
              }
              placeholder="Field Label"
            />

            {field.error && <p style={{ color: "red" }}>{field.error}</p>}
            <select
              value={field.type}
              onChange={(e) =>
                handleFieldChange(index, { type: e.target.value })
              }
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="file">File</option>
              <option value="number">Number</option>
              <option value="phone">Phone</option>
              <option value="select">Select</option>
              <option value="textarea">Textarea</option>
              <option value="date">Date</option>
              <option value="location">Location</option>
            </select>

            <MdDeleteForever
              onClick={() => handleDelete(index)}
              className="removeButton"
            />
          </div>
        ))}
      </div>
      <div className="buttonGroup">
        <button onClick={addField}>Add Field</button>
        <button onClick={handleSubmit}>Create Template</button>
      </div>
    </div>
  );
};
