import React from 'react'
import './info.sass'


export const Info = () =>{

    return(
        <div className = 'info'>
        <h3>Приложение для конвертации валют.</h3>
        <p>Базируется на открытом Api, данные публикуются центробанком ЕС.</p>
        <p>Больше возможностей API по ссылке <a href='https://exchangeratesapi.io/'>https://exchangeratesapi.io/</a></p>
        </div>
    )
}
