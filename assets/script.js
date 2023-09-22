/* armazena todas as tarefas cadastradas */
const tasks = [];
const taskListElement = document.getElementById("taskListElement")
const emptyTaskListElement = document.getElementById("emptyTaskListElement")

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


renderTasks()



