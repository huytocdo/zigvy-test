import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";

import { initFetchPosts, fetchPosts } from "./blogs";

export function* watchBlogs() {
  yield takeEvery(actionTypes.INIT_FETCH_POSTS, initFetchPosts);
  yield takeEvery(actionTypes.FETCH_POSTS, fetchPosts);
}
