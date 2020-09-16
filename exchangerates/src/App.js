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
        USD: { name: "Доллар США", flag: USD, course: "" },
        CNY: { name: "Китайский Юань", flag: CNY, course: "" },
        EUR: { name: "Евро", flag: EUR, course: "" },
        GBP: { name: "Фунт Стерлингов", flag: GBP, course: "" },
        JPY: { name: "Японская Йена", flag: JPY, course: "" },
        RUB: { name: "Российский Рубль", flag: RUB, course: "" },
        CHF: { name: "Швейцарский Франк", flag: CHF, course: "" },
      },
    };
  }

  componentDidMount() {
    fetch(
      `https://api.exchangeratesapi.io/latest?base=${this.state.baseCurrency}`
    )
      .then((response) => response.json())
      .then((data) => {

        const rateArr = ["USD", "CNY", "EUR", "GBP", "JPY", "RUB", "CHF"];
        const currency = { ...this.state.currency };

        rateArr.forEach((item, i) => {
          currency[item].course = data.rates[item].toFixed(2);

          this.setState({
            date: data.date,
            rate: data.rates,
            currency: currency
          })
        });
      });
  }
  
  render() {
    console.log(this.state);
    return (
      <RateContext.Provider value={{ state: this.state }}>
        <Layout />
      </RateContext.Provider>
    );
  }
}
