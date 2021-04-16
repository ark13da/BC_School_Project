import React from 'react';

const View = (props) => {
    return (
        <div >
            <p>First Name: {props.firstName}</p>
            <p>Last Name: {props.lastName}</p>
            <p>Phone Number: {props.phone}</p>
            <p>Message: {props.message}</p>
            <p>Role: {props.role}</p>
      </div>
    );
};

export default View;