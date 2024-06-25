import { Event } from "../types";

export const mockEvents: Event[] = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for Event 1",
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
        label: "Age",
        type: "number",
        value: "",
        error: "",
      },
      {
        label: "Gender",
        type: "select",
        value: "",
        error: "",
      },
      {
        label: "Profile Picture",
        type: "file",
        value: "",
        error: "",
      },
    ],
    templateId: "1",
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for Event 2",
    fields: [
      {
        label: "Username",
        type: "text",
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
        label: "Phone Number",
        type: "phone",
        value: "",
        error: "",
      },
      {
        label: "Country",
        type: "select",
        value: "",
        error: "",
      },
      {
        label: "Bio",
        type: "textarea",
        value: "",
        error: "",
      },
    ],
    templateId: "2",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Description for Event 3",
    fields: [
      {
        label: "Project Name",
        type: "text",
        value: "",
        error: "",
      },
      {
        label: "Project Description",
        type: "textarea",
        value: "",
        error: "",
      },
      {
        label: "Start Date",
        type: "date",
        value: "",
        error: "",
      },
      {
        label: "End Date",
        type: "date",
        value: "",
        error: "",
      },
      {
        label: "Status",
        type: "select",
        value: "",
        error: "",
      },
      {
        label: "Location",
        type: "location",
        value: "",
        error: "",
      },
    ],
    templateId: "3",
  },
];
