// import { bookmark, unmark } from "./actions";

const initialState = {
  bookMarkArr: []
};

const reducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case 'BOOKMARK':
      state[action.key] = action.value
      return Object.assign({}, state)
    case 'GETRID':
      state[action.key] = action.value
      return Object.assign({}, state)
    default:
      return state;
  }
};
export default reducer;
