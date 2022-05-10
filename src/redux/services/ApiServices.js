import axios from "axios"

const getMenuData = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=menu")
}


const getCarDamage = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=damage")
}


const getCarDetails = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=details")
}





const ApiServices = {
    getMenuData,
    getCarDamage,
    getCarDetails
}

export default ApiServices