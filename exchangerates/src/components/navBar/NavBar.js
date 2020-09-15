import React from 'react'
import {NavLink} from 'react-router-dom'
import './navBar.sass'

export const NavBar = () => {
    return (
        <nav>
        <ul>
            <li><NavLink to = '/'>Главная</NavLink></li>
            <li><NavLink to = '/calc'>Калькулятор</NavLink></li>
            <li><NavLink to = '/sample'>Выборки</NavLink></li>
            <li><NavLink to = '/info'>Информация</NavLink></li>
        </ul>
    </nav>
    )
}
