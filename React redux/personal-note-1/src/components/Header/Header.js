import React from 'react';
import './Header.css';


const Header = (props) => {
    return (
        <div className="header">
            <h1 className="lightColor">Personal notes</h1>
            <p className="lightColor">You have {props.count} notes, {props.unchecked} of which are unchecked.</p>
        </div>
    );
};

export default Header;