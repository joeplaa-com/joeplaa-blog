// ----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface SetBrowserAction {
    type: 'SET_BROWSER';
    browser: string;
}

interface HideBrowserModal {
    type: 'HIDE_BROWSER_MODAL';
}

interface ShowBrowserModal {
    type: 'SHOW_BROWSER_MODAL';
}

interface DestroySession {
    type: 'DESTROY_SESSION';
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SetBrowserAction | HideBrowserModal | ShowBrowserModal | DestroySession

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const applicationActionCreators = {
    setBrowser: (browserName: string) => ({ type: 'SET_BROWSER', browser: browserName }),
    hideBrowserModal: () => ({ type: 'HIDE_BROWSER_MODAL' }),
    showBrowserModal: () => ({ type: 'SHOW_BROWSER_MODAL' }),
    destroySession: () => ({ type: 'DESTROY_SESSION' }),
};
