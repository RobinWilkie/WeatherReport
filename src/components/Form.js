import React from "react";

const Form = props => {
  return (
    <form className="form-inline mt-2" onSubmit={props.getWeather}>
      <input
        className="form-control mr-2"
        type="text"
        name="city"
        placeholder="Enter City..."
      />
      <input
        className="form-control mr-2"
        type="text"
        name="country"
        placeholder="Enter Country..."
      />

      <input className="btn btn-primary" type="submit" value="Show Weather" />
    </form>
  );
};

export default Form;
