/* armazena todas as tarefas cadastradas */
const tasks = [];

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



