import ActionTypes from "../action.types";

const initialState = {
  menu: {
    logout: {},
    list: [],
  },
  carDamage: {
    list: [],
  },
  carDetails: [],
  success: false,
  finish: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_MENU_DATA:
      return {
        ...state,
        menu: action.menu,
      };
    case ActionTypes.GET_CAR_DAMAGE:
      return {
        ...state,
        carDamage: action.carDamage,
      };

    case ActionTypes.GET_CAR_DAMAGE_API:
      return {
        ...state,
        carDamage: action.carDamage,
      };
    case ActionTypes.ADD_CAR_DAMAGE_DETAILS:
      return {
        ...state,
        success: action.carDetails.success,
      };
    case ActionTypes.GET_CAR_DETAILS:
      return {
        ...state,
        carDetails: action.carDetails,
      };
    case ActionTypes.PUT_CAR_DETAILS:
      return {
        ...state,
        carDetails: { ...state.carDetails, ...action.carDetails },
      };
    case ActionTypes.GET_CAR_ALL_INFORMATION:
      return {
        ...state,
        finish: action.finish,
      };
    default:
      return state;
  }
};

export default reducer;
