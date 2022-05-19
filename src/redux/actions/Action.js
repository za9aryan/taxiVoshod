import ActionTypes from "../action.types";
import carDetails from "../../pages/CardDetails/CarDetails";

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


export const putCarDetailsAction = (carDetails) => ({
    type: ActionTypes.PUT_CAR_DETAILS,
    carDetails
})

export const getCarDamageActionApi = (carDamage) => ({
    type: ActionTypes.GET_CAR_DAMAGE_API,
    carDamage
})

export const addCatDamageDetailsAction = (carDetails) => ({
    type: ActionTypes.ADD_CAR_DAMAGE_DETAILS,
    carDetails
})