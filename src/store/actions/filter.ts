// ----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

import { LabelProps } from '../../types'

interface SetTagsFilter {
    type: 'SET_TAGS_FILTER'
    page: string
    tags: Array<LabelProps>
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = SetTagsFilter

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const filterActionCreators = {
    // Set selected tags
    setTagsFilter: (page: string, tags: Array<LabelProps>) => ({ type: 'SET_TAGS_FILTER', page: page, tags: tags }),
};
