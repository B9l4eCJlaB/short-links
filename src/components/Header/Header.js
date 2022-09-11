import './Header.css'
function Header({ loggedIn, onSignOut, userData }) {
    return (
        <header className='header'>
        <h1 className="header__title">Short links</h1>
        {loggedIn ? (
        <div className="header__wrapper">
          <p className="header__login">{userData}</p>
          <button className="header__button" onClick={onSignOut}>
            Выйти
          </button>
        </div>
      ) : null}
        </header>
    )
}
export default Header;