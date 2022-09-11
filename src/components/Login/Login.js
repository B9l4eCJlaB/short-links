import { useState } from "react";
import Authentication from "../Authentication/Authentication";

function Login({onSubmit}) {
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
        title="Вход"
        buttonText="Войти"
        text="Ещё не зарегистрированы?"
        linkText="Регистрация"
        linkRoute="/sign-up"
        onSubmit={handleSubmit}
        onUserNameHandler={usernameHandler}
        onPasswordHandler={passwordHandler}
        />
    )
}
export default Login;