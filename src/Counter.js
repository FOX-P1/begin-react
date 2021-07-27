import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: "INCREMENT" });
    };
    const onDecrease = () => {
        dispatch({ type: "DECREMENT" });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

// import React, { useState } from "react";

// function Counter() {
//     const [changeNum, setChangeNum] = useState(0);
//     const [number, setNumber] = useState(0);

//     const onIncrease = () => {
//         console.log(typeof number);
//         console.log(typeof changeNum);
//         setNumber((prevNumber) => prevNumber + changeNum);
//     };
//     const onDecrease = () => {
//         console.log(typeof number);
//         console.log(typeof changeNum);
//         setNumber((prevNumber) => prevNumber - changeNum);
//     };

//     const onChange = (event) => {
//         setChangeNum(parseInt(event.target.value, 10));
//     };

//     return (
//         <div>
//             <h1>{number}</h1>
//             <input type="number" onChange={onChange} value={changeNum} />
//             <button onClick={onIncrease}>+</button>
//             <button onClick={onDecrease}>-</button>
//         </div>
//     );
// }

// export default Counter;
