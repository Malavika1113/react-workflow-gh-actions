import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Data Ext Form
        </p>
        <form>
         <div className="input-container">
           <label>Release Version </label>
           <input type="text" name="uname" required />
         </div>
         <div className="input-container">
           <label>Model Type </label>
           <input type="password" name="pass" required />
         </div>
         <Button block size="lg" type="submit">
            Submit
         </Button>
        </form>
      </header>
    </div>
  );
}

export default App;
