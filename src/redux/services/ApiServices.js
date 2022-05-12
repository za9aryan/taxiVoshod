import axios from "axios"

export const getMenuData = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=menu")
}


export const getCarDamage = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=damage")
}


export const getCarDetails = async () => {
    return await axios.get("https://mechanic.taxivoshod.ru/api/?page=details")
}

export const postCarDetails = async (body) => {
    return await axios.post("https://mechanic.taxivoshod.ru/api/?page=details", { ...body })
} 