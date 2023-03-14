import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function onButtonClick() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <div className='my-class'>Counter: {counter}</div>
      <button onClick={onButtonClick}>Add 1</button>
    </div>
  );
}

export default App;
