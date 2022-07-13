document.getElementById("newTaskButton").addEventListener("click", displayDate);

function createTaskHtml(name, description, assignedTo, dueDate, status) {
  const task = {
    // Increment the currentId property
    id: this.currentId++,
    name: name,
    description: description,
    assignedTo: assignedTo,
    dueDate: dueDate,
    status: "TODO",
  };
  const html = ` 
        <div class="card" style="width: 18rem";>
           <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text">
              <p class="card-text">
              <div class="dropdown">
                  ${status}
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" href="#">Done</a>
                      <a class="dropdown-item" href="#">Stuck</a>
                      <a class="dropdown-item" href="#">In progress</a>
                  </div>
              </div>
           </p>
            </p>
            <p class="card-text">Assigned to: ${assignedTo}</p>
            <p class="card-text">Due to: ${dueDate}</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a href="#" class="btn btn-success">Button</a>
          </div>
        </div>
        `;
}

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }
  
  addTask(name, description, assignedTo, dueDate) {
    const task = {
      id: this.currentId++,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO",
    };
    this.tasks.push(task);
  }
  render() {
    const tasksHtmlList = [];
    
    for (i = 0; i < this.tasks.length; i++) {
      const tasks = this.tasks[i];
      const date = newDate(task.dueDate);
      const formattedDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
      const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.Status);
        tasksHtmlList.push(taskHtml);
    }
      const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
  }
}

newTaskVar = new TaskManager();
newTaskVar.addTask();


