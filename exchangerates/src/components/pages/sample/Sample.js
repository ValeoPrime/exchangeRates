import React, { useContext } from "react";
import RateContext from "../../../context/RateContext";
import { Button } from "../../button/Button";
import "./sample.sass";

export const Sample = () => {
  const {
    state,
    sampleDateHandler,
    baseValueHandler,
    base2ValueHandler,
    dataWrite,
    sampleRemove,
  } = useContext(RateContext);

  return (
    <div className="sample">
      <div className="sampleContainer">
        <div>
          <h3>
            {" "}
            Получить курс: &nbsp;
            <select onChange={baseValueHandler} value={state.sample.base}>
              {Object.keys(state.currency).map((item, i) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
            &nbsp;&nbsp; к &nbsp;&nbsp;
            <select onChange={base2ValueHandler} value={state.sample.base2}>
              {Object.keys(state.currency).map((item, i) => {
                return <option key={item}>{item}</option>;
              })}
            </select>
          </h3>
        </div>

        <div className="sampleHead">
          <span>
            Дата: <input type="date" onChange={sampleDateHandler} value="2020-09-17"/>
          </span>
          <Button text="Получить курс" click={dataWrite} arg={state.sample} />
        </div>
        <div className="sampleResult">
          <ul>
            {Object.keys(state.sampleList).reverse().map((item, i) => {
              return (
                <li key={item}>
                  <span>
                    <img
                      src={state.currency[state.sampleList[item].base].flag}
                      alt={item}
                    />
                    &nbsp;{state.sampleList[item].base}
                    &nbsp; к &nbsp;
                    <img
                      src={state.currency[state.sampleList[item].base2].flag}
                      alt={item}
                    />
                    &nbsp;{state.sampleList[item].base2}
                  </span>
                 
                  <span>{state.sampleList[item].date}</span>
                  <span>{`${state.sampleList[item].course.toFixed(2)} ${state.sampleList[item].base2}`}</span>
                  <button onClick={() => sampleRemove(item)}>
                    <i className="fa fa-times" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
