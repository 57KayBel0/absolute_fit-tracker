import React from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Health and Fitness Tracker</h1>
      </header>
      <main>
        <UserForm />
        <UserList />
      </main>
    </div>
  );
}

export default App;

