import React from 'react'
import './layout.sass'
import { AddClass } from '../../hoc/AddClass';
import { Header } from '../header/Header';

const Layout = () => {
    return (
        <div>
            <Header/>
        </div>
    )
}

export default AddClass(Layout, 'layout')
