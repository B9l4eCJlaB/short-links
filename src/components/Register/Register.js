import { useState } from "react";
import Authentication from "../Authentication/Authentication";

function Register({onSubmit}) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const usernameHandler = (e) => {
        setUserName(e.target.value);
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username, password)
    }
    return (
        <Authentication 
        title="Регистрация"
        buttonText="Зарегистрироваться"
        text="Уже зарегистрированы?"
        linkText="Войти"
        linkRoute="/sign-in"
        onSubmit={handleSubmit}
        onUserNameHandler={usernameHandler}
        onPasswordHandler={passwordHandler}
        />
    )
}
export default Register;