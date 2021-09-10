import React from "react";
import * as actionTypes from "../store/actions";

import { useSelector, useDispatch } from "react-redux";
import { createNote } from "../store/reducers/reducer";

const NewNote = () => {

  const dispatch = useDispatch();



  const addTodo = async (e) => {
    e.preventDefault();
    const text = e.target.noteInput.value
    dispatch(createNote(text));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.noteInput.value));
        e.target.noteInput.value = "";
      }}
    >
      <input type="text" name="noteInput" />
      <input type="submit" value="Add note" />
    </form>
  );
};

export default NewNote;
