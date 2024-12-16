let btn = document.querySelector(".btn");
let input = document.querySelector(".textfeild");
let listsDiv = document.querySelector(".lists");

let todos = [];

window.onload = () => {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => addTodo(todo))
}

btn.addEventListener("click", function () {
    if (input.value == '') {
        alert("Enter Valid List ");
    }
    todos.push(input.value);
    addTodo(input.value);
    input.value = "";
    localStorage.setItem('todos', JSON.stringify(todos));
})

function addTodo(todo) {
    let para = document.createElement("p");
    para.innerHTML = todo;
    listsDiv.appendChild(para);
    para.addEventListener("click", function () {
        para.style.textDecoration = "line-through";
        remove(todo);
    })
    para.addEventListener("dblclick", function () {
        listsDiv.removeChild(para);
        localStorage.setItem('todos', JSON.stringify(todos))
    })
}

function remove(todo) {
    let index = todos.indexOf(todo);
    if (index > -1) {
        todos.splice(index, 1);
    }
}

