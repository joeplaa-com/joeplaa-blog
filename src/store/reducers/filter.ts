import { Action, Reducer } from 'redux'
import { IFilterState } from '../interfaces'
import { KnownAction } from '../actions/filter'
import sortArrayObject from '../../utils/sortArrayObject'

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const initialFilterState: IFilterState = {
    userFilter: {
        'blog': [],
        'recommended': []
    },
    initialFilter: {
        'blog': [],
        'recommended': []
    }
};

export const filterReducer: Reducer<IFilterState> = (state: IFilterState | undefined, incomingAction: Action): IFilterState => {
    if (state === undefined) {
        return initialFilterState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
    // Add user and initial tags
    case 'ADD_TAGS_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    blog: sortArrayObject([...action.tags])
                },
                initialFilter: {
                    ...state.initialFilter,
                    blog: sortArrayObject([...action.tags])
                }
            };
        case 'recommended':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    recommended: sortArrayObject([...action.tags])
                },
                initialFilter: {
                    ...state.initialFilter,
                    recommended: sortArrayObject([...action.tags])
                }
            };
        }
        break;
        // Set user tags
    case 'SET_TAGS_FILTER':
        switch (action.page) {
        case 'blog':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    blog: sortArrayObject(action.tags)
                }
            };
        case 'recommended':
            return {
                ...state,
                userFilter: {
                    ...state.userFilter,
                    recommended: sortArrayObject(action.tags)
                }
            };
        }
        break;
        // Copy initial to user
    case 'RESET_TAG_FILTER':
        return {
            ...state,
            userFilter: state.initialFilter
        };
    }
    return state;
};
