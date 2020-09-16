import React, { useContext } from "react";
import RateContext from "../../context/RateContext";
import "./countResult.sass";


export const CountResult = () => {
  const { state } = useContext(RateContext);

  return (
    <div className="calcResult">
      <ul>
        <li>
          <p>
            <span>{state.inputValue}&nbsp;RUB</span>
            &nbsp; = &nbsp;
            <span>
              {state.result}&nbsp;{state.currencyValue}
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
};
