export default (state, action) => {
    switch (action.type) {
        case "rotate":
            return {
                ...state,
                rotating: action.payload
            };
        case "some":
            return {
                ...state,
                some: action.payload
            }
        default:
            return state;
    }
};