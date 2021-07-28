import React, {
    useState,
    useRef,
    useMemo,
    useReducer,
    useCallback,
} from "react";
// import Counter from "./Counter";
// import InputSample from "./inputSample";
import UserList from "./UserList";
import CreateUser from "./createUser";
import useInputs from "./hooks/useInputs";

function countActionUsers(users) {
    console.log("활성 사용자 수를 세는중...");
    return users.filter((user) => user.active).length;
}
// const [show, setShow] = useState(false);
// const showSample = () => {
//     setShow(true);
// };
// const hideSample = () => {
//     setShow(false);
// };
const initialState = {
    inputs: {
        username: "",
        email: "",
    },
    users: [
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
    ],
};

function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value,
                },
            };
        case "CREATE_USER":
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user),
            };
        case "TOGGLE_USER":
            return {
                ...state,
                users: state.users.map((user) =>
                    user.id === action.id
                        ? { ...user, active: !user.active }
                        : user
                ),
            };
        case "REMOVE_USER":
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.id),
            };
        default:
            return state;
    }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: "",
        email: " ",
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);

    const { users } = state;

    // const { username, email } = state.inputs;

    // const onChange = useCallback((e) => {
    //     const { name, value } = e.target;
    //     dispatch({
    //         type: "CHANGE_INPUT",
    //         name,
    //         value,
    //     });
    // }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        reset();
        nextId.current += 1;
    }, [username, email, reset]);

    const onToggle = useCallback((id) => {
        dispatch({
            type: "TOGGLE_USER",
            id,
        });
    }, []);

    const onRemove = useCallback((id) => {
        dispatch({
            type: "REMOVE_USER",
            id,
        });
    }, []);

    const count = useMemo(() => countActionUsers(users), [users]);

    return (
        <UserDispatch>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성사용자 수 : {count}</div>
        </UserDispatch>
        // <div>
        //     <InputSample show={show} />
        //     <button onClick={showSample}>Show</button>
        //     <button onClick={hideSample}>Hide</button>
        // </div>
    );
    // return <Counter />;
}

export default App;
