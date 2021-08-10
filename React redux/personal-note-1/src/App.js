import {React, useState, useEffect} from 'react';
import Header from './components/Header/Header.js';
import AddNote from './components/AddNote/AddNote';

import { useDispatch, useSelector } from "react-redux";
import { addNote, crossNote, deleteNote, selectNote } from "./slices/noteSlice";
import './App.css';

function App() {
  const [ newNote, setNewNote]  = useState('');
  
  let saveHandler = (e) => {
    e.preventDefault();
    dispatch(addNote(newNote));
    document.getElementById("noteForm").reset();
  }

  let changeHandler = (e) => {
    setNewNote(e.target.value);
  }

  let crossHandler = (e) => {
    dispatch(crossNote(e.target.id))
    
  }

  let deleteHandler = (e) => {
    dispatch(deleteNote(e.target.value))
  }
  
  const dispatch = useDispatch();
  const notes = useSelector(selectNote);
  
  useEffect(() => {
    
  },[notes])
  
  return (
    <div className="App">
      <Header count={notes.length} unchecked={notes.filter(i =>!i.crossed).length} />
      <AddNote save={changeHandler} take={saveHandler} />
      <ul>
        {notes.map((i) => {
          return (
            <li key={i.id}>
              <a id={i.id} className={i.crossed==true?'checked':'unchecked'} onClick={crossHandler}>
                {i.value}
              </a>
              <button onClick={deleteHandler} value={i.id}>
                Remove
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App;
