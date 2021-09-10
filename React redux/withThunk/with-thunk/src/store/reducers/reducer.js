import * as actionTypes from '../actions/actions';
/*
const addToDo = (text) => ({
  type: actionTypes.ADD_TODO,
  id: i++,
  text: text,
  completed: false,
})
*/

const initialState = {
  notes: [
    { id: 1, text: "someText", completed: false },
    { id: 2, text: "someText", completed: false },
  ],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        notes: state.notes.concat({
        id: action.id + 1,
        text: action.text,
        completed: action.completed
        })
      };
    case actionTypes.TOGGLE_TODO:
      const notetoChange = state.find(i => i.id === action.id);
      const chnageNote={...notetoChange,completed:}
      return {
        ...state,

      }
  }
    return state;
}


export default reducer;