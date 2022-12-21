import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Form
        </p>
      </header>
      <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
         <input type="submit" />
       </div>
     </form>
    </div>
  );
}

export default App;
