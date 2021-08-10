import React from 'react';
import './AddNote.css';

const AddNote = (props) => {
    return (
        <div className="addNote">
            <form  id="noteForm" onSubmit={props.take}>
                <input type="text" id="newInput" onChange={props.save} placeholder="Type your note" required></input>
                <button type="submit" >Take note</button>
            </form>
        </div>
    );
};

export default AddNote;