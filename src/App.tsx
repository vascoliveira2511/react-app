import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  interface User {
    id: number;
    name: string;
  }

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`, {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
