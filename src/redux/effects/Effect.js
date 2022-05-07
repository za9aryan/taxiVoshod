import {getMenuDataAction} from "../actions/Action";

export const getMenuDataEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getMenuData()
            dispatch(getMenuDataAction(res.data))
        } catch (e) {
            console.log(e.message())
        }
    }
}



export const getCarDamageEffect = () => {
    return async (dispatch, getState, services) => {
        try {
            const res = await services.getCarDamage()
            console.log(res)
        } catch (e) {
            console.log("getCarDamageEffect", e.message)
        }
    }
}