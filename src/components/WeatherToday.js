import React from "react";

const WeatherToday = props => {
  let weatherIcon = `http://openweathermap.org/img/w/${props.icon}.png`;
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-2 text-center">
      {props.city && props.country && (
        <h3>
          {props.city}, {props.country}
        </h3>
      )}
      <div className="d-flex justify-content-center align-items-center">
        {props.icon && (
          <img className="weather-icon" src={weatherIcon} alt="weather icon" />
        )}
        {props.temperature && <h3>{props.temperature}&deg; C</h3>}
      </div>
      {props.description && <p>Currently: {props.description}</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default WeatherToday;
