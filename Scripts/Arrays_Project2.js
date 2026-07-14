const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const html = `
        <p>${todo}
        </p>
        `;
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.jstodoList')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.jsNameInput');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}