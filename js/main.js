const elList = document.querySelector(".todolist__right__lists") //! ul
const elForm = document.querySelector(".todolist__right__wrap"); //! form
const elInput = document.querySelector(".todolist__right__wrap__add"); //! input
const elBtn = document.querySelector(".todolist__right__wrap__btn"); //! btn

elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let newCheckbox = document.createElement("input")
    let newLi = document.createElement("li")
    let text = document.createElement("p")

    newCheckbox.setAttribute("type", "checkbox")

    newLi.className = "todolist__right__lists__item"
    text.className = "li-active"
    newCheckbox.className = "active-checkbox"

    text.textContent = elInput.value.trim()

    newLi.appendChild(newCheckbox)
    newLi.appendChild(text)
    elList.appendChild(newLi)

    elInput.value = ""
})