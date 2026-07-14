const todoList = ['anuj shinde', 'bhumi rangdale'];

let todoListHTML = '';

for(let i = 0; i < todoList; i++)
{
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
}

function addTodo() {
    const inputElement = document.querySelector('.jsNameInput');
    const name = inputElement.value;
    
    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
}