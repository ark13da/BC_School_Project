import React from 'react';

const View = (props) => {
    return (
        <div >
            <h2>View your input</h2>
            <p><b>First Name:</b> {props.firstName}</p>
            <p><b>Last Name:</b> {props.lastName}</p>
            <p><b>Phone Number:</b> {props.phone}</p>
            <p><b>Message:</b> {props.message}</p>
            <p><b>Role:</b> {props.role}</p>
      </div>
    );
};

export default View;