// state argument here is not the application state, is only the state this reducer responsible for
// basically it is the returning the state this reducer generate before
export default function(state = null, action) { // here is an ES6 syntax that whenever a state is undefined, it will be set as null
    switch(action.type) {
        case 'BOOK_SELECTED':
            // we always want to return an fresh object, rather than some other js code
            // we never mutate our current state to produce new state
            return action.payload;
    }
    return state;
}