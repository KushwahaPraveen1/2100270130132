import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [prevWindowState, setPrevWindowState] = useState([]);
  const [currWindowState, setCurrWindowState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState(null);

  const fetchNumbers = async (numberType) => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/${numberType}`);
      const data = response.data;
      setPrevWindowState(data.windowPrevState);
      setCurrWindowState(data.windowCurrState);
      setNumbers(data.numbers);
      setAvg(data.avg);
    } catch (error) {
      console.error('Error fetching numbers:', error);
    }
  };

  return (
    <div className="App">
      <button onClick={() => fetchNumbers('even')}>Fetch Even Numbers</button>
      <button onClick={() => fetchNumbers('prime')}>Fetch Prime Numbers</button>
      <button onClick={() => fetchNumbers('fibo')}>Fetch Fibonacci Numbers</button>
      <button onClick={() => fetchNumbers('rand')}>Fetch Random Numbers</button>
      <div>
        <h2>Previous Window State:</h2>
        <p>{JSON.stringify(prevWindowState)}</p>
      </div>
      <div>
        <h2>Current Window State:</h2>
        <p>{JSON.stringify(currWindowState)}</p>
      </div>
      <div>
        <h2>Numbers:</h2>
        <p>{JSON.stringify(numbers)}</p>
      </div>
      <div>
        <h2>Average:</h2>
        <p>{avg !== null ? avg.toFixed(2) : 'N/A'}</p>
      </div>
    </div>
  );
}

export default App;
