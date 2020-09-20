import React, { Fragment, useContext } from "react";
import "./login.sass";
import { Button } from "../button/Button";
// import { Input } from '../input/Input';
import RateContext from "../../context/RateContext";

export const Login = () => {
  const {renderInputs} = useContext(RateContext)
  return (
    <Fragment>
      <div className="modalForm">
        {renderInputs()}
      </div>

      <div className="modalBtn">
        <Button text="Войти" />
      </div>
    </Fragment>
  );
};
