import React, { useEffect, useState } from 'react';
import './App.css';
import CardList from './card-list/CardList';
import { User } from './types/user';
import { fetchUsers, useWebSocket } from './hooks/user-hook';

function App() {

  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   fetchUsers().then((data) => setUser(data));
  // }, []);

  const user: User | undefined = useWebSocket("ws://localhost:8080");

  // Works
  console.log(user);

  return (
    <div className="App">
      <CardList
        user={user}
      />
    </div>
  );
}

export default App;
