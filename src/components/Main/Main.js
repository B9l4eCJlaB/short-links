import { useEffect, useState } from 'react';
import './Main.css';
import * as auth from "../../utils/auth";
function Main({loggedIn}) {
    const redirect = 'http://79.143.31.216/s/';
    const [input, setInput] = useState('');
    const [search, setSearch] = useState('');
    const [links, setLinks] = useState([]);
    useEffect(() => {
      if (loggedIn) {
        auth
          .getData()
            .then((data) => {
              setLinks(data)
            })
      }
    }, [loggedIn]);
    const handleChange = (evt) => {
        setInput(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        onAddLink(input);
        setInput('');
    }
    const handleSearch = (evt) => {
        setSearch(evt.target.value)
    }
    const filteredLinks = links.filter((link)=> {
        return link.target.toLowerCase().includes(search.toLowerCase());
    })
    const onAddLink = (data) => {
        auth
          .addUserLink(data)
            .then((newLink) => {
              setLinks([newLink, ...links]);
            })
      }
    return (
        <main className='main'>
            <form className='form' onSubmit={handleSubmit}>
                <input
                className='form__input'
                type="text"
                name='link'
                onChange={handleChange}
                value={input || ""}
                />
                <button className='form__button' type='submit'>add link</button>
            </form>
            <div className='main__columns'>
                <div className='main__sidebar'>
                <span className='main__span-text'>search your link</span>
                <input
                className='main__input' 
                type="text"
                onChange={handleSearch}
                />
                </div>
            <ul className='main__links'>
                {filteredLinks.map((link) => (
                    <li className='main__item' key={link.id}>
                        <a className='main__link' key={link.id} href={link.target}>{link.target}</a>
                    </li>
                ))}
            </ul>
            <ul className='main__links'>
            {filteredLinks.map((link) => (
                    <li className='main__item' key={link.id}>
                        <a className='main__link' href={redirect + link.short}>{link.short}</a>
                        <span className='main__counter'>{link.counter}</span>
                    </li>
                ))}
            </ul>
            </div>
        </main>
    )
}
export default Main;