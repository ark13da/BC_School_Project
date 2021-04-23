import React from "react";

const Overlay = (props) => {
  return (
    <div className="overlay">
      <div className="overlayView">
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Phone Number: {props.phone}</p>
        <p>Message: {props.message}</p>
        <p>Role: {props.role}</p>
        <button type="button" onClick={props.noSubmit}>
        Don't submit
        </button>
        <button type="button" onClick={props.submit}>
        Submit
        </button>
      </div>
     
    </div>
  );
};

export default Overlay;
