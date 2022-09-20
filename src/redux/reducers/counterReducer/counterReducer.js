import { COUNTER_MINUS, COUNTER_PLUS } from '../../actions'

export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case COUNTER_MINUS:
            return {
                count: state.count - 1
            }
        case COUNTER_PLUS:
            return {
                count: state.count + 1
            }
        default: return state
    }
}

