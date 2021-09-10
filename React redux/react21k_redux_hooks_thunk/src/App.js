import React, { useEffect } from "react";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";

import { initilizedNotes } from "./store/reducers/reducer";
import { useDispatch,useState } from "react-redux";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  //const state = useState();
  
  useEffect(() => {
    dispatch(initilizedNotes())
  },[dispatch]);

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
