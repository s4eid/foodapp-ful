import './App.css';
import React, {useState} from 'react'
import Count from './component/Count'

function App() {

  const [count,setCount]=useState(0);

  const [doo, setDo]=useState(true)

const plus=()=>{
 setCount(count+1)
}
const mines=()=>{
  if(count>0){
    setCount(count-1)
  }
}
  return (
    <div>
<h1>{count}</h1>
<Count plus={plus} mines={mines}/>
</div>
  );
}

export default App;
