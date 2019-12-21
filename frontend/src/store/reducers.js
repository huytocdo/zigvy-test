import * as actionTypes from './actions';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case actionTypes.COUNT_UP:
      return {
        count: state.count + 1
      }
    case actionTypes.COUNT_DOWN:
      return {
        count: state.count - 1
      }
    default:
      break;
  }
}

export default reducer;