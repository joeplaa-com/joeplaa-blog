import { Action, Reducer } from 'redux';
import { IApplicationState } from '../interfaces';
import { KnownAction } from '../actions/application';

// We support Blink (Brave, Chrome, Chromium, current Edge, current Opera), Gecko (Firefox) and WebKit (Safari) based browsers
const supportedBrowsers = ['Chrome', 'Chromium', 'Edge', 'EdgeChromium', 'Firefox', 'Safari', 'Mobile Safari'];
// We don't support Trident (Internet Explorer), EdgeHTML (old Edge) and Presto (old Opera) based browsers
const unsupportedBrowsers = ['Internet Explorer', 'IE'];

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialApplicationState: IApplicationState = {
    isSupported: undefined,
    showModal: false,
    setModal: undefined
};

export const applicationReducer: Reducer<IApplicationState> = (state: IApplicationState | undefined, incomingAction: Action): IApplicationState => {
    if (state === undefined) {
        return initialApplicationState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
    case 'SET_BROWSER':
        if (supportedBrowsers.includes(action.browser)) {
            return {
                ...state,
                isSupported: true,
                showModal: false
            };
        } else if (unsupportedBrowsers.includes(action.browser)) {
            return {
                ...state,
                isSupported: false,
                showModal: true
            };
        } else {
            return {
                ...state,
                isSupported: false,
                showModal: false
            };
        }
    case 'HIDE_BROWSER_MODAL':
        return {
            ...state,
            showModal: false,
            setModal: new Date()
        };
    case 'SHOW_BROWSER_MODAL':
        return {
            ...state,
            showModal: true,
            setModal: undefined
        };
    case 'DESTROY_SESSION':
        return {
            ...initialApplicationState
        };
    }

    return state;
};
