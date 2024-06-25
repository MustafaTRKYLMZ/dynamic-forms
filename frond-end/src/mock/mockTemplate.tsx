import { FormTemplate } from "../types";

export const mockTemplates: FormTemplate[] = [
  {
    id: "1",
    title: "Registration Form",
    description: "Form for user registration",
    fields: [
      {
        label: "Name",
        type: "text",
        value: "",
        error: "",
      },
      {
        label: "Email",
        type: "email",
        value: "",
        error: "",
      },
      {
        label: "Password",
        type: "password",
        value: "",
        error: "",
      },
      {
        label: "Gender",
        type: "select",
        value: "",
        error: "",
        options: ["Male", "Female", "Other"],
      },
    ],
  },
  {
    id: "2",
    title: "Contact Form",
    description: "Form to contact us",
    fields: [
      {
        label: "Full Name",
        type: "text",
        value: "",
        error: "",
      },
      {
        label: "Email Address",
        type: "email",
        value: "",
        error: "",
      },
      {
        label: "Message",
        type: "textarea",
        value: "",
        error: "",
      },
      {
        label: "Reason for Contact",
        type: "select",
        value: "",
        error: "",
        options: ["Support", "Sales", "Feedback"],
      },
    ],
  },
  {
    id: "3",
    title: "Survey Form",
    description: "Form to gather survey responses",
    fields: [
      {
        label: "Age",
        type: "number",
        value: "",
        error: "",
      },
      {
        label: "Favorite Color",
        type: "select",
        value: "",
        error: "",
        options: ["Red", "Green", "Blue", "Other"],
      },
      {
        label: "Comments",
        type: "textarea",
        value: "",
        error: "",
      },
    ],
  },
];
