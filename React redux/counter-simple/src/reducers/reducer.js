import * as actionTypes from "../actions/actions";

const initialState = {
  counter: 0,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      }
    case actionTypes.RESET:
      return {
        ...state,
        counter: 0,
      }
    default:
      return state
  }
}

export default reducer
