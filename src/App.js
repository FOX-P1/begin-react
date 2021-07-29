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
import produce from "immer";

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
        case "CREATE_USER":
            return produce(state, (draft) => {
                draft.users.push(action.user);
            });
        case "TOGGLE_USER":
            return produce(state, (draft) => {
                const user = draft.users.find((user) => user.id === action.id);
                user.active = !user.active;
            });
        case "REMOVE_USER":
            return produce(state, (draft) => {
                const index = draft.users.findIndex(
                    (user) => user.id === action.id
                );
                draft.users.splice(index, 1);
            });
        default:
            return state;
    }
}

// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

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

    const count = useMemo(() => countActionUsers(users), [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser />
            <UserList users={users} />
            <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
        // <div>
        //     <InputSample show={show} />
        //     <button onClick={showSample}>Show</button>
        //     <button onClick={hideSample}>Hide</button>
        // </div>
    );
    // return <Counter />;
}

export default App;
