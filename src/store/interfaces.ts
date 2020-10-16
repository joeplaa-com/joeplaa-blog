// -----------------
// STATE - This defines the type of data maintained in the Redux store.
import { LabelProps } from '../types'

export interface IFilterState {
    selectedTags: {
        [blog: string]: Array<LabelProps>,
        recommended: Array<LabelProps>
    }
}

export interface IRootState {
    filter: IFilterState;
}
