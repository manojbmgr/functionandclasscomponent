import React, {useState} from "react";
function FunctionCounter(){
    const [countNo, setCount] = useState(0);
    return(
        <div className="counterDiv">
            <h1>Function counter</h1>
            <h2>{countNo}</h2>
            <button onClick={() =>setCount(countNo + 1)}>+</button>
            <button onClick={() =>setCount(countNo - 1)}>-</button>
        </div>
    )

}

export default FunctionCounter