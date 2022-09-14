import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import config from './aws-exports'

function App() {
  useEffect(() => {
    const pullData = async() => {
      let data = await fetch(config.aws_appsync_graphqlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Api-Key': config.aws_appsync_apiKey
        },
        body: JSON.stringify({
          query: `query MyQuery {
            listParents {
              items {
                name
                id
                child {
                  items {
                    allergies
                    id
                    name
                  }
                }
              }
            }
          }`
        })
      })
      data = await data.json();
      console.log(data);
    }
    pullData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
      </header>
    </div>
  );
}

export default App;
