import React from 'react';
import './overlay.css';

const closeHandler=()=>{
    window.location.reload();
}

const Overlay = (props) => {
    return (
      <div className="overlay">
        <div className="overlayWindow">
          <p>Game over</p>
          <p>your score is: {props.score}</p>
          <button onClick={closeHandler}>X</button>
        </div>
      </div>
    );
};

export default Overlay;