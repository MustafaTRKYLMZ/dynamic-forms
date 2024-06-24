import { useNavigate } from "react-router-dom";

interface DynamicTableProps<T> {
  data: T[];
  endpoint: string;
}

export const DynamicTable = <
  T extends { id: number; title: string; description: string }
>({
  data,
  endpoint,
}: DynamicTableProps<T>) => {
  const navigate = useNavigate();

  return (
    <div className="dataList">
      <h2>{`${endpoint.toUpperCase()} List`}</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td className="dataButtonGroup">
                <button
                  onClick={() =>
                    navigate(`/create-event/${item.id}`, {
                      state: { newEvent: item },
                    })
                  }
                >
                  Preview
                </button>
                <button onClick={() => navigate(`/${endpoint}/${item.id}`)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
