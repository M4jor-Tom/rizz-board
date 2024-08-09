import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './card-list/CardList';
import { User } from './types/user';
import { fetchUsers } from './hooks/user-hook';

function App() {

  const [user, setUser] = useState<User>();

  useEffect(() => {
    fetchUsers().then((data) => setUser(data));
  }, []);

  return (
    <div className="App">
      <CardList
        user={user}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
