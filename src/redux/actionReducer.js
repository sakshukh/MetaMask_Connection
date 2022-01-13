import { RENDER_COMPONENT, WALLET_DATA } from "./actionType";
import { combineReducers, createStore } from "redux"

function componentReducer(state, action) {
    switch (action.type) {
        case RENDER_COMPONENT:
            return {
                ...state,
                componentName: action.payload
            }

        default:
            return {
                componentName: false
            }
    }
}


function walletDataReducer(state, action) {
    switch (action.type) {
        case WALLET_DATA:
            return {
                ...state,
                walletData: action.payload
            }

        default:
            return {}
    }
}

const rootReducer = combineReducers({
    component: componentReducer,
    walletData: walletDataReducer
})

const store = createStore(rootReducer)

export default store