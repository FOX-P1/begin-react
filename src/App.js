import React, { useState, useRef, useMemo, useCallback } from "react";
// import Counter from "./Counter";
// import InputSample from "./inputSample";
import UserList from "./UserList";
import CreateUser from "./createUser";
import Counter from "./Counter";

function App() {
    const countActionUsers = (users) => {
        console.log("활성 사용자 수를 세는중...");
        return users.filter((user) => user.active).length;
    };
    // const [show, setShow] = useState(false);
    // const showSample = () => {
    //     setShow(true);
    // };
    // const hideSample = () => {
    //     setShow(false);
    // };
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
    });
    const { username, email } = inputs;
    const onChange = useCallback((event) => {
        const { name, value } = event.target;
        setInputs((inputs) => ({
            ...inputs,
            [name]: value,
        }));
    }, []);
    const [users, setUsers] = useState([
        {
            id: 1,
            username: "velopert",
            email: "asdas@aafgfadasgsdg.eaf",
            active: true,
        },
        {
            id: 2,
            username: "tester",
            email: "sfff@gsdgsjdigsgji.fas",
            active: false,
        },
        {
            id: 3,
            username: "liz",
            email: "dsgsd@gdfsjibsabj.vcx",
            active: false,
        },
    ]);

    const nextId = useRef(4);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        setUsers((users) => users.concat(user));

        setInputs({
            username: "",
            email: "",
        });
        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback((id) => {
        setUsers((users) => users.filter((user) => user.id !== id));
    }, []);

    const onToggle = useCallback((id) => {
        setUsers((users) =>
            users.map((user) =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    }, []);
    const count = useMemo(() => countActionUsers(users), [users]);
    return (
        <>
            <Counter />
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
            <div>활성사용자 수 : {count}</div>
        </>
        // <div>
        //     <InputSample show={show} />
        //     <button onClick={showSample}>Show</button>
        //     <button onClick={hideSample}>Hide</button>
        // </div>
    );
    // return <Counter />;
}

export default App;
