import actions from './actions';
import { delay } from 'redux-saga';
import { all, call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';

//=====================================
//  WATCHERS
//-------------------------------------

export function* watchCommand(action) {
    yield takeLatest(actions.NEW_COMMAND, parseCommand);
}

//=====================================
//  SAGAS
//-------------------------------------

function* parseCommand(action) {
    const text = action.payload.command.toLowerCase()
    switch (text) {
        case 'clear':
            yield put(actions.newCommandFulfilled(actions.CMDS_CLEAR, 'clear'))
            break;
        case 'hi':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.CMDS_HI, 'hi'))
            break;
        case 'help':
            yield put(actions.newCommandFulfilled(actions.CMDS_HELP, 'help'))
            break;
        case 'linkedin':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to LinkedIn...!'))
            yield delay(1000)
            window.open('https://www.linkedin.com/in/corralcarlos', '_blank')
            break;
        case 'github':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to GitHub...!'))
            yield delay(1000)
            window.open('https://www.github.com/ccorral', '_blank')
            break;
        case 'twitter':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to Twitter...!'))
            yield delay(1000)
            window.open('https://twitter.com/carloscorral', '_blank')
            break;
        case 'behance':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to Behance...!'))
            yield delay(1000)
            window.open('https://www.behance.net/carloscorral', '_blank')
            break;
        case 'resume':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to my resume...!'))
            yield delay(1000)
            window.open('https://drive.google.com/open?id=1G5qTXrN7brP6WMORIbL4vG1FAh2sHcRj', '_blank')
            break;
        case 'email':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'You can email me at emailccorral@gmail.com.'))
            break;
        default:
            const parsed = yield parse(text)
            const command = parsed._[0]
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.DIDNT_RECOGNIZE_COMMAND))
            break;
    }
}


const aboutSagas = [
  fork(watchCommand)
];

export default aboutSagas