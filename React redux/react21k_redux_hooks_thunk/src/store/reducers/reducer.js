import * as actionTypes from "../actions";
import notesServices from '../../services/notes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data;
    case actionTypes.ADD_TODO:
      return [...state,action.data]
    case actionTypes.TOGGLE_TODO:
      const noteToChange = state.find((n) => n.id === action.id)
      const changeNote = {
        ...noteToChange,
        completed: !noteToChange.completed,
      }
      return state.map((note) => (note.id !== action.id ? note : changeNote))
    default:
      return state
  }
};

export const initilizedNotes = () => {
  return async (sth) => {
    const notes = await notesServices.getAll()
    sth({
      type: actionTypes.INIT_NOTES,
      data: notes,
    })
  }
};

export const createNote = (content) => {
  return async (sth) => {
    const newNote = await notesServices.createNew(content);
    sth({
      type: actionTypes.ADD_TODO,
      data:newNote
    })
  }
}

export default reducer;
