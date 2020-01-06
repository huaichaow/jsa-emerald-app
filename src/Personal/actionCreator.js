import { BACKEND_URL } from 'react-native-dotenv';

const moment = require('moment');

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1pa2UiLCJlbWFpbCI6Im1pa2VAZ21haWwuY29tIiwiaWQiOiI1ZTEwYmMyNDcwMWZiZDQ4OTczNzdkOWYiLCJpYXQiOjE1NzgyNzczNjQsImV4cCI6MTU4MDg2OTM2NH0.87qX49d6TTfqzhtI1jLiAoMn4bVyIGG4FNf9dLSX63c';

export const actionType = {
  BACKUP_START: 'BACKUP_START',
  BACKUP_SUCCESSFUL: 'BACKUP_SUCCESSFUL',
  BACKUP_FAILED: 'BACKUP_FAILED',
  SIGNUP_START: 'SIGNUP_START',
  SIGNUP_SUCCESSFUL: 'SIGNUP_SUCCESSFUL',
  SIGNUP_FAILED: 'SIGNUP_FAILED',
};

export function backupStart() {
  return {
    type: actionType.BACKUP_START,
  };
}

export function backupSuccessful(timestamp) {
  return {
    type: actionType.BACKUP_SUCCESSFUL,
    payload: timestamp,
  };
}

export function backupFailed() {
  return {
    type: actionType.BACKUP_FAILED,
  };
}

export function signupStart() {
  return {
    type: actionType.SIGNUP_START,
  };
}

export function signupSuccessful(userInfo) {
  return {
    type: actionType.signupSuccessful,
    payload: userInfo,
  };
}

export function signupFailed() {
  return {
    type: actionType.signupFailed,
  };
}

export const requestBackup = (transactions) => (dispatch) => {
  dispatch(backupStart());
  fetch(`${BACKEND_URL}/backup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transactions),
  }).then((response) => {
    if (response.status === 200) {
      setTimeout(() => dispatch(dispatch(backupSuccessful(moment().unix()))), 1000);
    } else {
      setTimeout(() => dispatch(backupFailed()), 1000);
    }
  })
    .catch((error) => {
      setTimeout(() => dispatch(backupFailed()), 1000);
      throw error;
    });
};
