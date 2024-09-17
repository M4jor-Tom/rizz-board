// @ts-nocheck
import './App.css';
import CardList from './card-list/CardList';
import { User } from './types/user';
import { useWebSocket } from './hooks/user-hook';

function App() {

  const user: User | undefined = useWebSocket("ws://localhost:8080");

  if(user === undefined) {

    return (<div>Loading...</div>);
  }

  return (
    <div className="App">
      <CardList
        user={user}
      />
    </div>
  );
}

export default App;
