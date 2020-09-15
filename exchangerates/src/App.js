import React, { Component } from "react";
import "./App.sass";
import Layout from "./components/layout/Layout";
import RateContext from "./context/RateContext";
import CHF from "./img/CHF.png";
import CNY from "./img/CNY.png";
import EUR from "./img/EUR.png";
import GBP from "./img/GBP.png";
import JPY from "./img/JPY.png";
import RUB from "./img/RUB.png";
import USD from "./img/USD.png";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "USD",
      rate: "",
      date: "",
      currency: {
        USD: { name: "Доллар США", flag: USD, course: "2.80" },
        CNY: { name: "Китайский Юань", flag: CNY, course: "9999999" },
        EUR: { name: "Евро", flag: EUR, course: "9999999" },
        GBP: { name: "Фунт Стерлингов", flag: GBP, course: "9999999" },
        JPY: { name: "Японская Йена", flag: JPY, course: "9999999" },
        RUB: { name: "Российский Рубль", flag: RUB, course: "9999999" },
        CHF: { name: "Швейцарский Франк", flag: CHF, course: "9999999" },
      },
    };
  }

  

  render() {
    
    return (
      <RateContext.Provider value={{state: this.state}}>
          <Layout />
      </RateContext.Provider>
    );
  }
}
