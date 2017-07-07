const pacientiInitialState = {
    pacienti: 'test',
    filterInput: 'filter..........'
}

const PacientiReducer = (state = pacientiInitialState, action) => {
    switch(action.type) {
        case 'FILTER_INPUT_CHANGE':
            return Object.assign({}, state, {filterInput: action.payload});
        
        default:
            return state;
    }
}

export default PacientiReducer;