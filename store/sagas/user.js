import { allowedStatusCodes } from 'next/dist/lib/load-custom-routes'
import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import * as UserType from "../types"

function* addUser(action){
    try{
        const newUser = yield responseSymbol.json()
        yield put({
            type: UserType.USER_ADD_SUCCESSED,
            payload: newUser.data
        })
    }catch(error){
        yield put({
            type: UserType.USER_ADD_FAILED,
            payload: error.message
        })
    }
}

function* watchAddUser(){
    yield takeLatest(UserType.USER_ADD_REQUESTED, addUser)
}

