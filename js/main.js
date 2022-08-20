let elForm = document.querySelector(".todo-form"); 
let elList = document.querySelector(".todo-list");
let elInput = document.querySelector(".todo-input");
let elTemplate = document.querySelector("#todo-item--template").content;

const todosArr = []
function daleteBtn(e){
      const todoId = e.target.dataset.id
      let findindex = todosArr.findIndex((elem)=> elem.id == todoId)
      todosArr.splice(findindex,1)
      renderTodo(todosArr,elList)
}

function renderTodo(todoArr,element){
      element.innerHTML = null
      todoArr.forEach((todo)=>{
            const cloneTemplate = elTemplate.cloneNode(true)
            const elTitle = cloneTemplate.querySelector('.todo-item-complete-text');
            const elDaleteBtn = cloneTemplate.querySelector('.todo-item-delete-btn');
            const elCheckBox = cloneTemplate.querySelector('.todo-input-complete');

            elTitle.textContent = todo.text,
            elCheckBox.checked = todo.isCompeted,
            elDaleteBtn.dataset.id = todo.id

            elDaleteBtn.addEventListener('click',daleteBtn)

            element.appendChild(cloneTemplate)
      })
}

elForm.addEventListener('submit',(event)=>{
      event.preventDefault();
      const inputValue = elInput.value.trim();
      todosArr.push({
            id:todosArr.length + 1,
            text:inputValue,
            isCompeted:false

      })
      renderTodo(todosArr,elList)
      elInput.value=null
})