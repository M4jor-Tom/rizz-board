import React, { useEffect, useState } from 'react';
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
    </div>
  );
}

export default App;
