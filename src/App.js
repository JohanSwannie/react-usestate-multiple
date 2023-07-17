import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [array, setArray] = useState([]);

  const generateArray = (e) => {
    e.preventDefault();
    setArray([...array, { username: username, password: password }]);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="app">
      <form onSubmit={generateArray}>
        <label>
          Username:
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <br />
        <br />
        <button>Submit</button>
        <br />
        <h3>List of Users & Passwords</h3>
        <ul>
          {array.map((item, index) => (
            <li key={index}>
              Username: {item.username} --- Password: {item.password}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default App;
