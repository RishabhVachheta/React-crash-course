import React, {useState} from 'react'

function Counter() {
  // useState is a React Hook that lets you add a state variable to your component.
  const[count, setCount] = useState(0);
  
  return (
    <>
      <div>
        <p>you clicked this button {count} Time.</p>
        <button onClick={() => setCount(count + 1)}>Click Me!!</button>
      </div>
    </>
  )
}

export default Counter;