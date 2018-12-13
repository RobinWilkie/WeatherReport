import React, { Component } from "react";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "0e4d216cd9426cc9af6c7d271c1b9f72";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    icon: undefined,
    clouds: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric
    `);
    const data = await api_call.json();
    const api_5day_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`
    );
    const dataFuture = await api_5day_call.json();
    if (city && country) {
      console.log(data);
      console.log(dataFuture);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        icon: data.weather[0].icon,
        clouds: data.clouds.all,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        clouds: undefined,
        icon: undefined,
        error: "PLease enter a location"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          icon={this.state.icon}
          clouds={this.state.clouds}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
