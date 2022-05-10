import ActionTypes from "../action.types";

export const getMenuDataAction = (menu) => ({
    type: ActionTypes.GET_MENU_DATA,
    menu
})


export const getCarDamageAction = (carDamage) => ({
    type: ActionTypes.GET_CAR_DAMAGE,
    carDamage
})

export const getCarDetailsAction = (carDetails) => ({
    type: ActionTypes.GET_CAR_DETAILS,
    carDetails
}) 