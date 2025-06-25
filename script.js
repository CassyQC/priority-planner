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
    let importance = "";
    if(priority <= 2){
        importance = "high";
    }else if (priority === 3){
        importance = "medium";
    }else{
        importance = "low";
    }
    const newTask = {
        'task' : task,
        'priority' : priority,
        'importance':importance
    }
    tasks.push(newTask);

  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  // const arr = ['a','b','c'];
  // console.log('arr length', arr.length) 
    // max index = arr.length - 1
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = "";


  for (let i = 0; i < tasks.length; i++) {
    const item = tasks[i];
    // tasks[0]
    const div = document.createElement("div");
    div.className = "task " + item.importance;
    div.textContent = item.task + " (Priority " + item.priority + ")";
    taskList.appendChild(div);
  }
}


