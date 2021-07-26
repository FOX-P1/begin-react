import React, { useState } from "react";
import Counter from "./Counter";
import InputSample from "./inputSample";
import UserList from "./UserList";

function App() {
    // const [show, setShow] = useState(false);
    // const showSample = () => {
    //     setShow(true);
    // };
    // const hideSample = () => {
    //     setShow(false);
    // };

    return (
        <UserList />
        // <div>
        //     <InputSample show={show} />
        //     <button onClick={showSample}>Show</button>
        //     <button onClick={hideSample}>Hide</button>
        // </div>
    );
    // return <Counter />;
}

export default App;
