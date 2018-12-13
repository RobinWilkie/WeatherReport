import React from "react";

const Weather = props => {
  let weatherIcon = `http://openweathermap.org/img/w/${props.icon}.png`;
  return (
    <div>
      {props.city && props.country && (
        <p>
          Location: {props.city}, {props.country}
        </p>
      )}
      {props.temperature && <p>Temperature: {props.temperature}&deg; C</p>}
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.wind && <p>Wind Speed: {props.wind}mps</p>}
      {props.clouds && <p>Cloud Cover: {props.clouds}%</p>}
      {props.description && <p>Currently: {props.description}</p>}
      {props.icon && (
        <img className="weather-icon" src={weatherIcon} alt="weather icon" />
      )}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
