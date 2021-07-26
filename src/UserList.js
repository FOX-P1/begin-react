import React from "react";

function User({ user }) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList() {
    const users = [
        {
            id: 1,
            username: "velopert",
            email: "asdas@aafgfadasgsdg.eaf",
        },
        {
            id: 2,
            username: "tester",
            email: "sfff@gsdgsjdigsgji.fas",
        },
        {
            id: 3,
            username: "liz",
            email: "dsgsd@gdfsjibsabj.vcx",
        },
    ];

    return (
        <div>
            {users.map((user, index) => (
                <User user={user} key={index} />
            ))}
        </div>
    );
}

export default UserList;
