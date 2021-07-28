import React, { useContext } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={{
                    cursor: "pointer",
                    color: user.active ? "green" : "black",
                }}
                onClick={() => {
                    dispatch({ type: "TOGGLE_USER", id: user.id });
                }}>
                {user.username}
            </b>
            <span>({user.email})</span>
            <button
                onClick={() => {
                    dispatch({ type: "REMOVE_USER", id: user.id });
                }}>
                삭제
            </button>
        </div>
    );
});

function UserList({ users }) {
    // const timerId = useRef(null);
    // const increament = () => {
    //     console.log("increment", new Date());
    // };
    // React.useEffect(() => {
    //     timerId.current = setInterval(increament, 1000);
    //     return () => {
    //         if (timerId.current) clearInterval(timerId.current);
    //     };
    // }, []);
    return (
        <div>
            {users.map((user) => (
                <User user={user} key={user.id} />
            ))}
        </div>
    );
}

export default React.memo(UserList);
