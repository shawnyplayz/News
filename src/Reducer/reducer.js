import { bookmark } from "./actions";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case bookmark:
      return { ...state, initialState: initialState.push(bookmark) };
    default:
      return state;
  }
};
export default reducer;
