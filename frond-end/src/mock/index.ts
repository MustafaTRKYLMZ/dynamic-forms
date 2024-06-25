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
];
