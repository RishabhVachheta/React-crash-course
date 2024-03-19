import React,{useState} from "react";

function TextField()  {
    const [text, setText] = useState('Hello');

    function handlechange(e) {
        setText(e.target.value);
    }
    return (
        <div>
            <input value={text} onChange={handlechange} />
            <p>you typed: {text}</p>
            <button onClick={() => setText("Hello")}>Reset</button>
        </div>
    )
} 

export default TextField;