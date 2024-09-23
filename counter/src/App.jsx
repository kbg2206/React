import { useState } from 'react'
import './App.css'




// It is not updating the value of count in UI , 
// if this count value is used soo many places . So if any update happen in UI will be done by React

// function App() {

//   let count = 0;

//   const addValue = () =>{
//     count++;
//     console.log(count);
//   }
  
//   const subValue = () =>{
//     count--;
//     console.log(count);
//   }

//   return (
//     <div>
//       <h1>Counter program</h1>
//       <h2>counter value {count}</h2>
//       <button onClick={addValue}>+</button>

//       <br/>
//       <br/>

//       <button onClick={subValue}>-</button>
//     </div>
//   )
// }

// UI updation is control by React     
const App = () =>{
  let [count, setCount] = useState(0); // var ko prapogate karna UI pa every time it changes
  // setcount will update the value of count 

  const addValue = () =>{
    // let newValue = count + 1;
    // setCount(newValue); // contains new value of count

    count = count+1;
    setCount(count);
  }

  const subValue = () =>{
    if(count>=1)
    setCount(count - 1);
    else
    setCount(count)
  }

  return (
    <div>
      <h1>Counter program</h1>
      <h2>counter value {count}</h2>
      <button onClick={addValue}>+</button>

      <br/>
      <br/>

      <button onClick={subValue}>-</button>
    </div>
  )

} 

export default App
