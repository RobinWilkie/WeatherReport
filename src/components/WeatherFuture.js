import React from "react";

const WeatherFuture = props => {
  let weatherIcon = `http://openweathermap.org/img/w/${props.icon1}.png`;
  return (
    <div>
      {props.city && props.country && <h4>Tomorrow's Weather</h4>}
      <div className="d-flex">
        <div className="d-flex flex-column mr-2 p-2 border-right border-white">
          {props.icon1 && (
            <img
              className="weather-icon"
              src={weatherIcon}
              alt="weather icon"
            />
          )}
          {props.temperature1 && <h4>{props.temperature1}&deg; C</h4>}
        </div>
        <div>
          {props.humidity1 && <p>Humidity: {props.humidity1}%</p>}
          {props.wind1 && <p>Wind Speed: {props.wind1}mps</p>}
          {props.clouds1 && <p>Cloud Cover: {props.clouds1}%</p>}
          {props.description1 && <p>{props.description1}</p>}
        </div>
      </div>
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default WeatherFuture;
