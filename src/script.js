let todoInput, errorInfo, addBtn, ulList, newTodo, popup, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloseBtn;

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()
};

const prepareDOMElements = () => {
   todoInput = document.querySelector('.todo-input');
   errorInfo = document.querySelector('.error-info');
   addBtn = document.querySelector('.btn-add');
   ulList = document.querySelector('.todolist ul');
   popup = document.querySelector('.popup');
   popupInput = document.querySelector('.popup-input');
   popupInfo = document.querySelector('.popup-info');
   popupAddBtn = document.querySelector('.accept');
   popupCloseBtn = document.querySelector('.cancel');


};

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
    ulList.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup)
    };
const addNewTask = () => {
    if (todoInput.value !== ""){
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
        createToolsArea()
        ulList.append(newTodo);
        todoInput.value = ''
        errorInfo.textContent = ''
    }else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }   
};
const createToolsArea = () => {
    const toolsPanel = document.createElement('div')
    toolsPanel.classList.add('tools')
    newTodo.append(toolsPanel)

    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.textContent = 'Zrobione'
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'X'
    const editBtn = document.createElement('button')
    editBtn.classList.add('edit')
    editBtn.textContent = 'EDIT'
    
    toolsPanel.append(completeBtn,  editBtn, deleteBtn)
}
const checkClick = e => {
    if(e.target.matches('.complete')){
        e.target.closest('li').classList.toggle('completed')
        e.target.classList.toggle('completed')
    //    e.target.closest('li').classList.toogle('completed')
      
    }else if(e.target.matches('.edit')){
        editTodo();
    }else if(e.target.matches('delete')){
    }
}

const editTodo = () => {
    popup.style.display = 'flex'
}
const closePopup = () => {
    popup.style.display = 'none'
}
document.addEventListener('DOMContentLoaded', main);
