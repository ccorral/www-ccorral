import actions from './actions'
import { delay } from 'redux-saga'
import { all, call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import amplitude from 'amplitude-js'


//=====================================
//  WATCHERS
//-------------------------------------

export function* watchCommand(action) {
    yield takeLatest(actions.NEW_COMMAND, parseCommand)
}

//=====================================
//  SAGAS
//-------------------------------------

function* parseCommand(action) {
    const text = action.payload.command.toLowerCase()
    amplitude.getInstance().logEvent('home-user_submitted_command')
    switch (text) {
        case 'clear':
            yield put(actions.newCommandFulfilled(actions.CMDS_CLEAR, 'clear'))
            break
        case 'hi':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.CMDS_HI, 'hi'))
            break
            case 'help':
            yield put(actions.newCommandFulfilled(actions.CMDS_HELP, 'help'))
            break
        case 'bio':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, `
                Hi again! I'm Carlos.
                I'm a software engineer with a passion for front-end development and design.
                I live in Los Angeles with a little family and love exploring our city via food, art, and architecture.
                I'll be updating this bio a little later. In the meantime, visit some of my social network links.
            `))
            break
        case 'linkedin':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to LinkedIn...!'))
            yield delay(1000)
            window.open('https://www.linkedin.com/in/corralcarlos', '_blank')
            break
        case 'github':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to GitHub...!'))
            yield delay(1000)
            window.open('https://www.github.com/ccorral', '_blank')
            break
        case 'twitter':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to Twitter...!'))
            yield delay(1000)
            window.open('https://twitter.com/carloscorral', '_blank')
            break
        case 'behance':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to Behance...!'))
            yield delay(1000)
            window.open('https://www.behance.net/carloscorral', '_blank')
            break
        case 'resume':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'Taking you to my resume...!'))
            yield delay(1000)
            window.open('https://drive.google.com/open?id=1G5qTXrN7brP6WMORIbL4vG1FAh2sHcRj', '_blank')
            break
        case 'email':
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.ADD_TO_COMMAND_LIST, 'You can email me at emailccorral@gmail.com.'))
            break
        default:
            yield delay(500)
            yield put(actions.newCommandFulfilled(actions.DIDNT_RECOGNIZE_COMMAND))
            break
    }
}


const aboutSagas = [
  fork(watchCommand)
]

export default aboutSagas