import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://c7.hotpng.com/preview/661/898/527/react-javascript-library-web-development-vue-js-funding-icon.jpg" alt='logo'/>
            {/* <img src="./react.png"/>
            <img src="./js.png"/>
            <img src="./html_css_js.png"/> */}
      </header>
    );
}

export default Header;