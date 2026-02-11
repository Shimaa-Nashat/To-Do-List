let lists = document.getElementById('todo-list');
let list = document.createElement('li');
list.className = "todo-item";
let listInput = document.getElementById('todo-input');
 
function addList() {
    if (listInput.value !== "") {
        list.innerHTML = `
        <p class="todo-text">${listInput.value}</p> <button id="delete-button" onclick="deleteList(this)">Delete</button>`;
        lists.appendChild(list);
        listInput.value = "";
        list = document.createElement('li');
        list.className = "todo-item";
    }
}
function deleteList(button) {
    button.parentElement.remove();
}  
function indrted() {
    let todoText = document.getElementsByClassName('todo-text');
    todoText.setstyle.textDecoration = "line-through";
    list.appendChild(todoText);
    
}

