import React from "react";
import { Counter } from "../../counter/Counter";
import { CountResult } from "../../countResult/CountResult";
import "./calculator.sass";

export const Calkulator = () => {
  return (
    <div className="calculator">
      <div className="calcContainer">
        <Counter />
        <CountResult />
      </div>
    </div>
  );
};
