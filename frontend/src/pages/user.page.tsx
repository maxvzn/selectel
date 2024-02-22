import { useEffect, useState } from "react";
import { config } from "../shared/config.ts";

type User = {
  name: string;
  id: number;
};

export function UserPage() {
  const [users, setAllUsers] = useState([] as User[]);
  useEffect(() => {
    fetch(`${config.API_URL}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((body: { content: User[] }) => {
        setAllUsers(body.content);
      })
      .catch((error) => {
        setAllUsers(error);
      });
  }, []);

  return (
    <ul>
      {Array.isArray(users) ? (
        [
          { id: 1, name: "user1" },
          { id: 2, name: "user2" },
        ].map(({ name, id }) => (
          <li>
            <div>{id}</div>
            <b>{name}</b>
          </li>
        ))
      ) : (
        <div color="red">{(users as any).message}</div>
      )}
    </ul>
  );
}
