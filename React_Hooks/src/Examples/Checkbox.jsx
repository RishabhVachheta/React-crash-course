import React,{useState} from "react";

function Checkbox(){
    const[liked, setLiked] = useState(true);

    function handlechange (e) {
        setLiked(e.target.checked)
    }
    return(
        <div>
            <input type="checkbox" checked={liked} onChange={handlechange} />
            <p>you {liked ? 'liked' : 'did not like'} this.</p>
        </div>
    )
}

export default Checkbox;