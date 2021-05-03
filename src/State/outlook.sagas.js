import { put, takeLatest, all } from "redux-saga/effects";
import { reduxActions } from "./outlook.actions";
import { folders } from "./outlook.reducer";

function* fetchFolders(action) {
  const folderKey = Object.keys(folders).find(key => folders[key] === action.currentFolder)
  try {
    let data = JSON.parse(localStorage.getItem(folderKey));
    if(!data){
      switch(action.currentFolder){
        case folders.inbox:
          data = require("../Assets/JSON/inbox.json");
          break;
        case folders.spam:
          data = require("../Assets/JSON/spam.json");
          break;
        default:
          data = [];
          break;
      }
      localStorage.setItem(folderKey, JSON.stringify(data));
    }
    yield put({ type: reduxActions.saveFolders, key: folderKey, value: data});
  } catch (error) {
    yield put({ type: reduxActions.saveFolders, key: folderKey, value: null});
  }
}

export function* watcher() {
  yield all([
    takeLatest(reduxActions.getFolders, fetchFolders),
  ]);
}