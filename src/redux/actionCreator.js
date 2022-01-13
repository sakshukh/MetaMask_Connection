import { RENDER_COMPONENT, WALLET_DATA } from "./actionType";

export function renderComponent(value) {
    return {
        type: RENDER_COMPONENT,
        payload: value
    }
}

export function setWalletData(data) {
    return {
        type: WALLET_DATA,
        payload: data
    }
}


