import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const SERVER_IP = "http://localhost:3000";

const axiosConfig = {
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
};

class App extends Component {
  state = {
    me: null
  };

  auth = () => {
    window.location.href = `${SERVER_IP}/auth`;
  };

  getMe = () => {
    axios.get(`${SERVER_IP}/getMe`, axiosConfig).then(response => {
      this.setState({
        me: JSON.stringify(response.data)
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.getMe}>Получить данные о себе</button>
        <button onClick={this.auth}>Авторизоваться с помощью Google</button>
        {this.state.me}
      </div>
    );
  }
}

export default App;
