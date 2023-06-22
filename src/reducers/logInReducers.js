const initialState = [];

const logInSaveData = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN': {
            const abc = action.goData;
            state.push(abc);
            return state;
            break;
        }
        case 'ALLDATA': {
            return state;
            break;
        }
        default: return state;
    }
}

export default logInSaveData;