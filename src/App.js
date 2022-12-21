import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Form
        </p>
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
      </header>
    </div>
  );
}

export default App;
