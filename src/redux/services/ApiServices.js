import axios from "axios"

const getMenuData = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=menu")
}


const getCarDamage = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=damage")
}






const ApiServices = {
    getMenuData,
    getCarDamage
}

export default ApiServices