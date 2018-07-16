import { all } from 'redux-saga/effects'
import homeSagas from '../pages/Home/sagas'

export default function* rootSaga() {
    yield all([
        ...homeSagas,
    ])
}