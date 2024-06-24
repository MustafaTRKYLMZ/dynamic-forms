import { Link, useParams } from "react-router-dom";
import { useEvent } from "../../contexts/EventContext";
import { Event } from "../../types";

export const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const numericId = typeof id === "string" ? parseInt(id, 10) : id;
  const { events } = useEvent();

  const selectedEvent = events.find(
    (event: Event) =>
      (typeof event.id === "string" ? parseInt(event.id) : event.id) ===
      numericId
  );

  if (!selectedEvent) {
    return <p>Event not found</p>;
  }

  const fields = selectedEvent.fields;

  // Get unique keys for table headers
  const headers = [...new Set(fields.flatMap(Object.keys))];

  return (
    <div>
      <h2>Event Detail</h2>
      <div>{fields?.length === 0 && <p>No fields found for this event</p>}</div>
      <table>
        <thead>
          <tr>
            {headers.map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fields?.map((field: any, index: number) => (
            <tr key={index}>
              {headers.map((key) => (
                <td key={key}>{field[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
