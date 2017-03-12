const counterReducer = (state = {
    counter: 0
}, action) => {
    switch(action.type) {
        case 'ADD':
            return {
                counter: state.counter += action.payload
            };
        case 'SUBTRACT':
            return {
                counter: state.counter -= action.payload
            };
    }
    return state;
};

export default counterReducer;