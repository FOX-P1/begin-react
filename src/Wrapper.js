import React from "react";

function Wrapper(aa) {
    const style = {
        border: "2px solid black",
        padding: "16px",
    };
    return <div style={style}>{aa.children}</div>;
}
export default Wrapper;
