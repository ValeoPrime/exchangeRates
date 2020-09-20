import React, { Component } from "react";
import "./App.sass";
import Layout from "./components/layout/Layout";
import RateContext from "./context/RateContext";
import axios from "axios";
import CHF from "./img/CHF.png";
import CNY from "./img/CNY.png";
import EUR from "./img/EUR.png";
import GBP from "./img/GBP.png";
import JPY from "./img/JPY.png";
import RUB from "./img/RUB.png";
import USD from "./img/USD.png";
import { Darkmask } from "./components/darkMask/darkMask";
import { Modal } from "./components/modal/Modal";
import { Input } from "./components/input/Input";

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        email: {
          value: "",
          type: "email",
          label: "Email",
          errorMessage: "Введите корректный Email",
          valid: false,
          touched: false,
          validationRulers: {
            required: true,
            email: true,
          },
        },
        password: {
          value: "",
          type: "password",
          label: "Пароль",
          errorMessage: "Введите корректный Пароль",
          valid: false,
          touched: false,
          validationRulers: {
            required: true,
            minLength: 6,
          },
        },
      },

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

      //calcState
      inputValue: 100,
      currencyValue: "USD",
      result: null,

      //sample
      sample: {
        base: "USD",
        base2: "RUB",
        date: "2020-09-17",
        course: "",
      },
      sampleList: {},
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

        rateArr.forEach((item) => {
          currency[item].course = data.rates[item].toFixed(2);

          this.setState({
            date: data.date,
            rate: data.rates,
            currency: currency,
          });
        });
      });
    axios("https://exchangerates-b8f45.firebaseio.com/sample.json").then(
      (data) => {
        console.log("Все выборки из базы", data.data);
        this.setState({
          sampleList: data.data,
        });
      }
    );
  }

  validateControl(value, validationRulers) {
    if (!validationRulers) {
      return true;
    }

    let isValid = true;

    if (validationRulers.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validationRulers.email) {
      isValid = validateEmail(value) && isValid;
    }
    if (validationRulers.minLength) {
      isValid = value.length >= validationRulers.minLength && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, controlName) => {

    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(
      control.value,
      control.validationRulers
    );

    formControls[controlName] = control;

    this.setState({
      formControls: formControls,
    });
  };

  renderInputs = () => {
    return Object.keys(this.state.formControls).map((controlName, i) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + i}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          errorMessage={control.errorMessage}
          shouldValidate={true}
          onChange={(event) => {
            console.log("Вызов он чендж");
            this.onChangeHandler(event, controlName);
          }}
        />
      );
    });
  };

  baseValueHandler = (event) => {
    let sample = { ...this.state.sample };

    sample.base = event.target.value;
    this.setState({
      sample: sample,
    });
  };

  base2ValueHandler = (event) => {
    let sample = { ...this.state.sample };

    sample.base2 = event.target.value;
    this.setState({
      sample: sample,
    });
  };

  sampleDateHandler = (event) => {
    let sample = { ...this.state.sample };

    sample.date = event.target.value;
    this.setState({
      sample: sample,
    });
  };

  dataWrite = async () => {
    console.log(this.state.sample.date);
    await fetch(
      `https://api.exchangeratesapi.io/${this.state.sample.date}?base=${this.state.sample.base}`
    )
      .then((response) => response.json())
      .then((response) => {
        let sample = { ...this.state.sample };

        sample.course = response.rates[this.state.sample.base2];
        this.setState({
          sample: sample,
        });
      });

    await axios
      .post(
        "https://exchangerates-b8f45.firebaseio.com/sample.json",
        this.state.sample
      )
      .then((response) => {
        return "";
      });

    await axios("https://exchangerates-b8f45.firebaseio.com/sample.json").then(
      (data) => {
        console.log("Все выборки из базы", data.data);
        this.setState({
          sampleList: data.data,
        });
      }
    );
  };

  sampleRemove = async (item) => {
    let sampleList = { ...this.state.sampleList };
    delete sampleList[item];
    this.setState({
      sampleList: sampleList,
    });
    await axios
      .delete(`https://exchangerates-b8f45.firebaseio.com/sample/${item}.json`)
      .then((response) => {
        return "";
      });
  };

  inputValueHandler = (event) => {
    this.setState({
      inputValue: event.target.value,
      result: null,
    });
  };

  currencyValueHandler = (event) => {
    this.setState({
      currencyValue: event.target.value,
      result: null,
    });
  };

  calculatorHandler = async (value) => {
    let result;

    await fetch(`https://api.exchangeratesapi.io/latest?base=RUB`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Дата", data);
        result = (data.rates[value] * this.state.inputValue).toFixed(3);
        console.log(result);
      });

    this.setState({
      result: result,
    });
  };

  render() {
    // console.log("Текущий стейт", this.state);
    return (
      <RateContext.Provider
        value={{
          state: this.state,
          inputValueHandler: this.inputValueHandler,
          currencyValueHandler: this.currencyValueHandler,
          calculatorHandler: this.calculatorHandler,
          baseValueHandler: this.baseValueHandler,
          base2ValueHandler: this.base2ValueHandler,
          sampleDateHandler: this.sampleDateHandler,
          dataWrite: this.dataWrite,
          sampleRemove: this.sampleRemove,
          renderInputs: this.renderInputs,
        }}
      >
        <Darkmask />
        <Modal />
        <Layout />
      </RateContext.Provider>
    );
  }
}
