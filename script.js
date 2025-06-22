const tasks = []
console.log('tasks',tasks)

function addTask(){
    console.log('add task')
    const taskInput = document.getElementById('taskInput');
    const priorityInput = document.getElementById('priorityInput');
    const priority = parseInt(priorityInput.value); 
    const task = taskInput.value.trim();
    console.log('task',task)
    if(!task){
        alert('Please enter a task');
        return;
    }
    let importance = '';
    if(priority <= 2){
        importance = 'high'
    }else if (priority === 3){
        importance = 'medium'
    }else{
        importance = 'low'
    }
    const newTask = {
        'task' : task,
        'priority' : priority,
        'importance':importance
    }
    tasks.push(newTask)
    console.log('tasks',tasks)
    taskInput.value = '';
}