import React from "react";

const Weather = props => {
  return (
    <div>
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.wind && <p>Wind Speed: {props.wind}mps</p>}
      {props.clouds && <p>Cloud Cover: {props.clouds}%</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
