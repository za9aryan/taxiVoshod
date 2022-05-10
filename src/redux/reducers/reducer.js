import ActionTypes from "../action.types";


const fakeCarDamageData = {
    "list": [
        {
            "id": 124,
            "name": "Правое переднее крыло",
            "descr": "",
            "side": "right",
            "part": ["fender_front", "fender_rear"], // fender - крыло, tire - шина, glass - стекло, door - дверь
            "images": []
        },
        {
            "id": 123,
            "name": "Левое переднее крыло",
            "descr": "Описание повреждения",
            "side": "left",
            "part": ["glass_front", "glass_rear"], // fender - крыло, tire - шина, glass - стекло, door - дверь
            "images": [
                {
                    "img": "/images/img.jpg"
                }
            ]
        },
        {
            "id": 126,
            "name": "Правое переднее крыло",
            "descr": "",
            "side": "rear",
            "part": "", // fender - крыло, tire - шина, glass - стекло, door - дверь
            "images": []
        },
        {
            "id": 125,
            "name": "Водитеьское сиденье",
            "descr": "Прожжено от сигареты",
            "side": "front",
            "part": ["bumper", "bonnet"],
            "images": []
        },

    ]
}


const initialState = {
    menu: {
        logout: {},
        list: []
    },
    carDamage: [],
    carDetails: []
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
        case ActionTypes.GET_CAR_DETAILS:
            return {
                ...state,
                carDetails: action.carDetails
            }
        case ActionTypes.PUT_CAR_DETAILS:
            return {
                ...state,
                carDetails: {...state.carDetails, ...action.carDetails}
            }
        default:
            return state;
    }
}


export default reducer