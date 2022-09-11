import { Link } from "react-router-dom";
import './Authentication.css'
function Authentication({title, buttonText, text, linkText, linkRoute, onSubmit,onUserNameHandler,onPasswordHandler}) {
    return (
        <div className='auth'>
            <h2 className='auth__title'>{title}</h2>
            <form className='auth__form' onSubmit={onSubmit}>
                <input
                className='auth__input' 
                name="username" 
                type="text"
                required
                onChange={onUserNameHandler}
                />
                <input 
                className='auth__input' 
                name="password" 
                type="password"
                required
                onChange={onPasswordHandler}
                />
                <div className='auth__buttons'>
                    <button className='auth__button' type="submit">{buttonText}</button>
                    <p className="auth__text">{text}</p>
                    <Link className="auth__link" to={linkRoute}>
                        {linkText}
                    </Link>
                </div>
            </form>
        </div>
    )
}
export default Authentication;