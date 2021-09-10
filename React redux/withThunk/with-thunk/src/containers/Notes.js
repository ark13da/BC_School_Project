import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from '../store/actions/actions';

const Notes = () => {

    const notes = useSelector((state) => state.notes)
    const dispatch = useDispatch();

    //action creator
    const toggleTodo = (id) => ({
        type: actionTypes.TOGGLE_TODO,
        id: id,
    })
    
    return (
        <ul>
            {notes.map((note) => {
                return <li key={note.id}
                onClick={()=>dispatch(toggleTodo(note.id))} className={note.completed?"strike-todo":"todo"}> {note.text} </li>
            })}
        </ul>
    );
};

export default Notes;