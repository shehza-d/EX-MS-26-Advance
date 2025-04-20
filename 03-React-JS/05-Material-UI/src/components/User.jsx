import React, { useEffect, useState } from "react";

const User = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1>Users</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      {users &&
        users.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </>
  );
};

export default User;
