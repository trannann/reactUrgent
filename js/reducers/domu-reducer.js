const domuInitialState = {
    domu: 'piiiicooooooo',
    filterInput: 'filter..........'
}

const DomuReducer = (state = domuInitialState, action) => {
    switch(action.type) {
        case 'FILTER_INPUT_CHANGE':
            return Object.assign({}, state, {filterInput: action.payload});
        
        default:
            return state;
    }
}

export default DomuReducer;