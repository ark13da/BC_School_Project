import React from 'react';
import * as actionTypes from "../store/actions/actions"
import { useSelector,useDispatch } from 'react-redux';

const NewNotes = () => {

    const notes = useSelector((state) => state);
    const dispatch = useDispatch();
    
    //action creator
    const addToDo = (text) => ({
      type: actionTypes.ADD_TODO,
      id: i++,
      text: text,
      completed: false,
    })

    let i =notes.length

    return (
        <form onSubmit={e => {
            e.preventDefault();
            dispatch(addToDo(e.target.note.value));
            e.target.note.value = "";
        }}>
            <input type="text" name="note"/>
            <input type="submit" value="Add note"/>
            
        </form>
    );
};

export default NewNotes;