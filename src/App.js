import React from 'react';
import './App.css';
import { useEffect } from "react";

function App() {
  let abc = {
  ref: 'master'
  };
  useEffect(() => {
    let response = await fetch(`https://api.github.com/repos/Malavika1113/react-workflow-gh-actions/actions/workflows/Reuseable-A.yml/dispatches`, {
      Method: 'POST',
      Headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': `Bearer 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`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json;charset=utf-8'
        },
      Body: JSON.stringify(abc)
      });
	  let result = await response.json();
	  console.log(result)
  }, []);
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
           <input type="text" name="pass" required />
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
