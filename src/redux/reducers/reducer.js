import ActionTypes from "../action.types";

const initialState = {
    menu: {},
    carDamage: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_MENU_DATA:
            return {
                ...state,
                menu: action.menu
            }
        case ActionTypes.GET_CAR_DAMAGE:
            return {
                ...state,
                carDamage: action.carDamage
            }
        default:
            return state;
    }
}


export default reducer