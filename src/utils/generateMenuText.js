const generateMenuText = (color, func) => {
    const burger = document.querySelector('.bm-burger-button')
    burger.click = func
    if (burger.querySelector("#burger_menu_text")) {
        const text = burger.querySelector("#burger_menu_text")
        text.style.color = color
        return
    }
    const text = document.createElement("div")
    console.log(color);
    text.style.color = color
    text.id = "burger_menu_text"
    text.innerText = "MENU"
    burger.appendChild(text)
}

export default generateMenuText