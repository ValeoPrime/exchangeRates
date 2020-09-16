import React, {useContext} from "react";
import RateContext from "../../context/RateContext";
import "./exchsnge.sass";

export const Exchange = () => {
    const {state} = useContext(RateContext)
    const currency = {...state.currency}
  return (
    <div className="exchange">
      <div className="exchangeContainer">
        <div className="exchangeContent">
          <div>
            {" "}
            <p>Базовая валюта: {state.baseCurrency} &nbsp; &nbsp;Дата: {state.date} </p>
          </div>

          <ul>
            {Object.keys(currency).map((item, i) => {
              return (
                <li key={item}>
                  <span>
                    <img src={currency[item].flag} alt={item} /> {item}
                  </span>
                  <span>{`1${state.baseCurrency} = ${currency[item].course} ${item}`}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
