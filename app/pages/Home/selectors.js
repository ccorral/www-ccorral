import get from 'lodash/get'

export function getCommandHistory(state) {
  return get(state.home, 'commandHistory', null)
}

export function getUserHistory(state) {
  return get(state.home, 'userHistory', null)
}