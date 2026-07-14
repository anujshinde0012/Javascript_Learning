const todoList = [{
    name: 'make dinner', 
    dueDate: '2025-11-25'
}, {
    name: 'wash dishes',
    dueDate: '2025-11-25'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;

        const html = `
        <div>${name}</div>
        <div>${dueDate}<div>
        ${name} ${dueDate}
        <button onclick="
            todolist.splice(${i}, 1);
            renderTodoList();
            " class="deleteTodoButton"> Delete </button>
        `;
        todoListHTML += html;
    }

    document.querySelector('.jstodoList')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.jsNameInput');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.jsDueDateInput');
    const dueDate = dateInputElement.value; 

    todoList.push({
        // name: name,
       // dueDate: dueDate,
        name,
        dueDate
});

    inputElement.value = '';

    renderTodoList();
}