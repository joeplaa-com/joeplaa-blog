// -----------------
// STATE - This defines the type of data maintained in the Redux store.
import { LabelProps } from '../types'

export interface IApplicationState {
    isSupported: boolean | undefined;
    showModal: boolean;
    setModal: Date | undefined;
}
export interface IFilterState {
    userFilter: {
        [blog: string]: Array<LabelProps>,
        recommended: Array<LabelProps>
    }
    initialFilter: {
        [blog: string]: Array<LabelProps>,
        recommended: Array<LabelProps>
    }
}

export interface IRootState {
    application: IApplicationState;
    filter: IFilterState;
}
