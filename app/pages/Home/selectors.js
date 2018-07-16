import get from 'lodash/get'

export function getCommandHistory(state) {
  return get(state.home, 'commandHistory', false)
}