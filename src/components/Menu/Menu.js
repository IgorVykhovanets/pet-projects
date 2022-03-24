import React from 'react';
import {NavLink} from "react-router-dom";

import "./menu.modules.css"

const Menu = () => {
    return (
        <div>
            <div className={'menu'}>
                <div className={'title-link'}>
                    <NavLink to={'/'}>RICK AND MORTY</NavLink>
                </div>
                <div className={'menu-nav-links'}>
                    <div><NavLink to={'/episodes'}>EPISODES</NavLink></div>
                    <div><NavLink to={'/characters'}>CHARACTERS</NavLink></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;