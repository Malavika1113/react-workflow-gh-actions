import {useState} from 'react';

const App = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(https://api.github.com/repos/Malavika1113/react-workflow-gh-actions/actions/workflows/Reuseable-A.yml, {
        method: 'GET',
        headers: {
		  auth: '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'
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result is: ', JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

      {data.data.map(person => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <h2>{person.path}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
