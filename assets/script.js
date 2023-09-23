/* armazena todas as tarefas cadastradas */
const tasks = [];
const taskListElement = document.getElementById("taskListElement")
const emptyTaskListElement = document.getElementById("emptyTaskListElement")
const frmTask = document.getElementById("frmTask")

function newId() {
    return Math.floor(Math.random()*1000);  /*Gera um ID entre 0 e 999 aleatorio p/ cada task nova*/
}

function createTask(taskTittle, taskDescription = ""){
    let id = newId();
    let task = {
        id,
        taskTittle,
        taskDescription,
    }
    tasks.push(task); // adiciona a task no array
    return task;
}

function getIndexByTaskId(taskId) {
    return tasks.findIndex((task) => task.id == taskId);
}

function deleteTask(taskId) {
    const taskIndex = getIndexByTaskId(taskId);
    tasks.splice(taskIndex, 1);

    renderTasks();
}

function renderTasks(listElement = taskListElement, emptyMessage = emptyTaskListElement) {
    let finalHtml = "";

    if (tasks.length === 0) {
        emptyMessage.style.display = 'block';
        listElement.style.display = 'none';
        return;
    }

    emptyMessage.style.display = 'none';
    listElement.style.display = 'flex';

    tasks.forEach(function(item){
        finalHtml += `
            <details class="taskItem">
                <summary class="taskTitle">${item.taskTitle}</summary>
                ${item.taskDescription}
                <div>
                    <button 
                        class="btn" 
                        onclick="if (confirm('Tem certeza?')) deleteTask(${item.id})"
                    >
                        Pronto
                    </button>
                    <button 
                        class="btn btn-info"
                        onclick="renderFormUpdate(${item.id})"
                    >
                        Alterar
                    </button>
                </div>
            </details>
        `;
    });
   
    listElement.innerHTML = finalHtml;
}

frmTask.addEventListener('submit', function(event) {
    event.preventDefault();

    if(frmTask.frmAction.value === "NEW_TASK") {
        createTask(frmTask.txtTaskTitle.value, frmTask.txtTaskDescription.value);
        frmTask.reset();
        return;
    }
})


renderTasks()



