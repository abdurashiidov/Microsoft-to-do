const elList = document.querySelector(".todolist__right__lists"); //! ul
const elForm = document.querySelector(".todolist__right__wrap"); //! form
const elInput = document.querySelector(".todolist__right__wrap__add"); //! input
const elBtn = document.querySelector(".todolist__right__wrap__btn"); //! btn


const todosArr = []
elForm.addEventListener("submit", (e) => {
    e.preventDefault()

    
    let newCheckbox = document.createElement("input")
    let newLi = document.createElement("li")
    let text = document.createElement("p")
    let edit = document.createElement("button")
    let del = document.createElement("button")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")

    newCheckbox.setAttribute("type", "checkbox")

    const inputValue = elInput.value.trim();
    // newCheckbox.checked = todo.isCompeted,
        // event.preventDefault();
        todosArr.push({
              id:todosArr.length + 1,
              text:inputValue,
              isCompeted:false
  
        })
        // renderTodo(todosArr,elList)
        elInput.value=null



    
    newLi.className = "todolist__right__lists__item"
    text.className = "li-active"
    newCheckbox.className = "active-checkbox"    
    div1.className = "active-div1"

    text.textContent = elInput.value.trim()
    edit.textContent = "edit"
    del.textContent = "delete"
    
    // newLi.appendChild(newCheckbox)
    // newLi.appendChild(text)
    elList.appendChild(newLi)

    
    newLi.appendChild(edit)
    newLi.appendChild(del)
    
    div1.appendChild(newCheckbox)
    div1.appendChild(text)
    
    newLi.appendChild(div1)
    newLi.appendChild(div2)

    div2.appendChild(edit)
    div2.appendChild(del)
    


    elInput.value = ""
})
