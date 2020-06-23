/**
 * reducer
 */

import { combineReducers } from 'redux'
import { type } from '../action';
const initialSatate = {
    userInfo:'',
    menuName: '首页',
    orgType: 0
}
export default (state = initialSatate, action) => {
    switch (action.type) {
        case type.DOLOGIN:
            return {
                ...state,
                userInfo: action.userInfo
            }
        case type.SWITCH_MENU:
            return {
                ...state,
                menuName: action.menuName
            }
        case type.JGGL_TREENODE:
            return {
                ...state,
                orgType: action.orgType
            }
        default:
            return state
    }
}