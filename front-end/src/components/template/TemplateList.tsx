import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../contexts/FormContext";

export const TemplateList: React.FC = () => {
  const { templates } = useForm();
  const navigate = useNavigate(); // Add this line to import useHistory hook
  // console.log(templates);

  return (
    <div className="templateList">
      <h2>Form Templates</h2>
      <div className="formTemplateGrid">
        {templates.map((template) => (
          <div className="card" key={template.id}>
            <div className="cardContent">
              <p className="cardTitle">{template.title}</p>
              <p className="cardDescription">{template.description}</p>
            </div>

            <div className="buttonGroup">
              <button onClick={() => navigate(`/form/${template.id}`)}>
                View preview
              </button>
              <button
                onClick={() =>
                  navigate(`/create-event`, {
                    state: { templateId: template.id, title: template.title },
                  })
                }
              >
                Create Event With This Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
