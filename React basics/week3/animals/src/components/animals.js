import React from 'react';

const animalList = ['cat', 'dog', 'fish'];

function alerter(e) {
    alert (`Hello, my name is ${e}`);
}

const Animals = () => {
    return (
        <div className="animalContainer">
            {animalList.map(i => {
                return(
                <div className="cage" key={i}>
                    <h3>{i}</h3>
                        <button  value={i} onClick={alerter.bind(this,i)}>click</button>
                </div>)
            })}
        </div>
    );
};

export default Animals;