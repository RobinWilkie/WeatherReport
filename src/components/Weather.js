import React from "react";

const Weather = props => {
  return (
    <div
      style={{
        width: "18rem",
        backgroundColor: "#1d1d1d",
        color: "#fff",
        borderColor: "#1d1d1d"
      }}
    >
      {props.wind && <h5>Summary</h5>}
      {props.wind && <p>Wind Speed: {props.wind}mps</p>}
      {props.clouds && <p>Cloud Cover: {props.clouds}%</p>}
      {props.humidity && <p>Humidity: {props.humidity}%</p>}
      {props.error && <p>{props.error}</p>}
    </div>
  );
};

export default Weather;
