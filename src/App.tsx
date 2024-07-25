import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './card-list/CardList';
import { MeetupList } from './types/meetup-list';

const meetupList: MeetupList = {
  meetups: [
  ]
};

function App() {
  return (
    <div className="App">
      <CardList
        meetupList={meetupList}
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
