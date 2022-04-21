import {useState} from 'react';
import './App.css';

function App() {
  const [counter, setCounter]=useState(0);


  
  return (
    <div className="App">
      	<h1 className={counter % 2 === 0 ? 'green' : 'red'}>{counter}</h1>
     <button onClick={()=>setCounter(counter+1)}>Increment</button>
     <button onClick={()=>setCounter(counter-1)}>Decrement</button>
     <button onClick={()=>setCounter(counter*2)}>Double</button>
    </div>
  );
}

export default App;
