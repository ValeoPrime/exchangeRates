import React, {Fragment} from 'react'
import { Login } from '../login/Login'
import './modal.sass'
import { Register } from '../register/Register';


export const Modal = () =>{

    return(
        <div className = 'modal'>
            <Fragment>
            <div className = 'modalHead'>
                <ul>
                    <li>Вход</li>
                    <li>Регистрация</li>
                </ul>

              <i className = 'fa fa-times' aria-hidden = 'true'/>  
            
            
            
            </div>
            <hr />
            </Fragment>

            {/* <Login/> */}
            <Register/>

        </div>
    )
}