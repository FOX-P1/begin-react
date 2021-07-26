import React, { useState, useEffect, useRef } from "react";

function InputSample({ show }) {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });

    const nameInput = useRef();

    const nicknameInput = useRef();

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출
    useEffect(() => {
        console.log("component mounted");
    }, []);

    useEffect(() => {
        // if (nameInput.current)
        //     nameInput.current.focus();
        nameInput.current && nameInput.current.focus();
        return () => {
            console.log("unmount");
        };
    }, []);

    const onChange = (event) => {
        const { value, name } = event.target; // 우선 event.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value, // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });
        nicknameInput.current.focus();
    };

    if (!show) return null;

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
                ref={nicknameInput}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
