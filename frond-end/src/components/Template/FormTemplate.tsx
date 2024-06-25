import React, { useState } from "react";
import { useForm } from "../../contexts/FormContext";
import { MdAdd, MdDeleteForever } from "react-icons/md";
import { Field } from "../../types";

export const FormTemplate: React.FC = () => {
  const { addTemplate } = useForm();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState<Field[]>([]);
  const [optionsInputs, setOptionsInputs] = useState<{ [key: number]: string }>(
    {}
  );

  const addField = () => {
    setFields([...fields, { label: "", type: "text", options: [] }]);
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
    setOptionsInputs({});
  };

  const handleDelete = (index: number) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);

    // Also remove the corresponding option input
    const newOptionsInputs = { ...optionsInputs };
    delete newOptionsInputs[index];
    setOptionsInputs(newOptionsInputs);
  };

  const handleOptionsChange = (index: number, value: string) => {
    setOptionsInputs({ ...optionsInputs, [index]: value });
  };

  const addOptions = (index: number) => {
    const newFields = [...fields];
    const optionsArray = (optionsInputs[index] || "")
      .split(",")
      .map((opt) => opt.trim());
    newFields[index].options = [
      ...(newFields[index].options || []),
      ...optionsArray,
    ];
    setFields(newFields);

    // Clear the input after adding options
    setOptionsInputs({ ...optionsInputs, [index]: "" });
  };

  const deleteOption = (fieldIndex: number, optIndex: number) => {
    const newFields = [...fields];
    newFields[fieldIndex].options = newFields[fieldIndex].options?.filter(
      (_, index) => index !== optIndex
    );
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
          <div key={index} className="formTemplateFieldContainer">
            <div className="formTemplateField">
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
                <option value="select">Select</option>
                <option value="number">Number</option>
                <option value="phone">Phone</option>
                <option value="textarea">Textarea</option>
                <option value="date">Date</option>
                <option value="location">Location</option>
              </select>
              <button
                onClick={() => handleDelete(index)}
                className="removeButton"
              >
                <MdDeleteForever />
              </button>
            </div>
            {field.type === "select" && (
              <div className="formTemplateFieldSelect">
                <div>
                  <label>Options</label>
                </div>

                <div className="formTemplateField">
                  <input
                    type="text"
                    value={optionsInputs[index] || ""}
                    onChange={(e) => handleOptionsChange(index, e.target.value)}
                    placeholder="Add option"
                  />
                  <button
                    onClick={() => addOptions(index)}
                    className="addButton"
                  >
                    <MdAdd />
                  </button>
                </div>
                <div className="optionsList">
                  {field?.options?.map((option, optIndex) => (
                    <div key={optIndex} className="optionItem">
                      <span>{option}</span>
                      <button
                        onClick={() => deleteOption(index, optIndex)}
                        className="removeButton"
                      >
                        <MdDeleteForever />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
