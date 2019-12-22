import * as actionTypes from '../actions/actionTypes';
import update from 'immutability-helper';

const initialState = {
  initLoading: true,
  loading: false,
  page: 1,
  reachLimit: false,
  posts: [],
  list: []
}

const initFetchPostsSuccess = (state, action) => {
  return update(state, {
    initLoading: {$set: false},
    loading: {$set: false},
    page: {$set: state.page + 1},
    posts: {$push: [...action.posts]},
    list: {$push: action.posts},
  })
}

const fetchPostsStart = (state, action) => {
  const skeletonArr = [...new Array(action.limit)].map(() => ({ loading: true }))
  return update(state, {
    loading: {$set: true},
    list: {$push: skeletonArr}
  })
}

const fetchPostsSuccess = (state, action) => {
  const newPostArr = state.posts.concat(action.posts);
  return update(state, {
    loading: {$set: false},
    page: {$set: state.page + 1},
    posts: {$set: newPostArr},
    list: {$set: newPostArr},
    reachLimit: {$set: action.posts.length === 0}
  })
}

const fetchPostsFail = (state, action) => update(state, {
  loading: {$set: false},
})


export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_FETCH_POSTS_SUCCESS: return initFetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action)
    default: return state;
  }
}