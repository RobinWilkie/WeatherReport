import React from "react";

const WeatherFuture = props => {
  let weatherIcon = `http://openweathermap.org/img/w/${props.icon1}.png`;
  return (
    <div>
      {props.city && props.country && <h4>Tomorrow's Weather</h4>}
      {props.temperature1 && <p>Temperature: {props.temperature1}&deg; C</p>}
      {props.humidity1 && <p>Humidity: {props.humidity1}%</p>}
      {props.wind1 && <p>Wind Speed: {props.wind1}mps</p>}
      {props.clouds1 && <p>Cloud Cover: {props.clouds1}%</p>}
      {props.description1 && <p>{props.description1}</p>}
      {props.icon1 && (
        <img className="weather-icon" src={weatherIcon} alt="weather icon" />
      )}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default WeatherFuture;
