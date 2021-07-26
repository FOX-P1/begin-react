import React, { useState } from "react";

function Counter() {
    const [changeNum, setChangeNum] = useState(0);
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        console.log(typeof number);
        console.log(typeof changeNum);
        setNumber((prevNumber) => prevNumber + changeNum);
    };
    const onDecrease = () => {
        console.log(typeof number);
        console.log(typeof changeNum);
        setNumber((prevNumber) => prevNumber - changeNum);
    };

    const onChange = (event) => {
        setChangeNum(parseInt(event.target.value, 10));
    };

    return (
        <div>
            <h1>{number}</h1>
            <input type="text" onChange={onChange} value={changeNum} />
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}

export default Counter;
