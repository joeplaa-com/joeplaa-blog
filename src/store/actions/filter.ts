// ----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

import { LabelProps } from '../../types'

interface AddTagsFilter {
    type: 'ADD_TAGS_FILTER'
    page: string
    tags: Array<LabelProps>
}

interface SetTagsFilter {
    type: 'SET_TAGS_FILTER'
    page: string
    tags: Array<LabelProps>
}

interface ResetTagFilter {
    type: 'RESET_TAG_FILTER'
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type KnownAction = AddTagsFilter | SetTagsFilter | ResetTagFilter

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const filterActionCreators = {
    // Add user and initial tags
    addTagsFilter: (page: string, tags: Array<LabelProps>) => ({ type: 'ADD_TAGS_FILTER', page: page, tags: tags }),
    // Set user tags
    setTagsFilter: (page: string, tags: Array<LabelProps>) => ({ type: 'SET_TAGS_FILTER', page: page, tags: tags }),
    // Copy initial to user
    resetTagFilter: () => ({ type: 'RESET_TAG_FILTER' }),
};
