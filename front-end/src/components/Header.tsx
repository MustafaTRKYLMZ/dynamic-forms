import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>Dynamic Forms</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Form Template</Link>
          </li>
          <li>
            <Link to="/create-event">Create Event</Link>
          </li>
          <li>
            <Link to="/event-list">Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
