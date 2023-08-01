import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import { formatUserName } from "./utils";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let mounted = true;
    const getUsers = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (mounted) {
        setUsers(response.data);
      }
    };
    getUsers();
  }, []);
  return (
    <div className="App">
      <div>Users:</div>
      {users.length === 0 ? (
        <div key="loading">Loading users...</div>
      ) : (
        <ul data-testid="user-list">
          {users.map((user) => (
            <li key={user.name + user.username} data-testid="user-item">
              {user.name + formatUserName(user.username)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
