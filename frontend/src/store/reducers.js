import * as actionTypes from './actions';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNT_UP:
      return {
        count: state.count++
      }
    case actionTypes.COUNT_DOWN:
      return {
        count: state.count--
      }
    default:
      break;
  }
}

export default reducer;