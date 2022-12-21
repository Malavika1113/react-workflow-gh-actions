import React from 'react';
import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.github.com/repos/Malavika1113/react-workflow-gh-actions/actions/workflows/Reuseable-B.yml/dispatches -d '{"ref":"master","inputs":{"name":"Mona the Octocat","home":"San Francisco, CA"}}'", {
      Method: 'POST',
      Headers: {
        'Accept': 'application/vnd.github+json',
        'Authorization': 'Bearer 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'
        'X-GitHub-Api-Version': '2022-11-28'
        },
      })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
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
