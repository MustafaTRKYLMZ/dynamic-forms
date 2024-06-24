import { Routes, Route } from "react-router-dom";
import {
  CreateEvent,
  EventPreview,
  FormTemplate,
  FormDetail,
  TemplateList,
  EventDetail,
  EventList,
} from "../components";
export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/create-event" element={<CreateEvent />} />
      <Route path="/create-event/:id" element={<EventPreview />} />
      <Route path="/create" element={<FormTemplate />} />
      <Route path="/event-list" element={<EventList />} />
      <Route path="/event-list/:id" element={<EventDetail />} />
      <Route path="/form/:id" element={<FormDetail />} />
      <Route path="/" element={<TemplateList />} />
    </Routes>
  );
};
