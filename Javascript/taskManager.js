document.getElementById("myBtn").addEventListener("click", displayDate);

function createTaskHtml (name, description, assignedTo, dueDate, status) {
    const task = {
        // Increment the currentId property
        id: this.currentId++,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: 'TODO'
    }
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
        `
     }; 
    






class taskManager {
  constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
        
        console.log(taskManager);
    }
    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
       this.tasks.push(task);
       console.log(taskManager);
    }
 
    render() {
      const tasksHtmlList = []
           for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i]
            const date = new Date(task.dueDate);
            const formattedDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
            const taskHtml = createTaskHtml(task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml)
           }

           const tasksHtml = tasksHtmlList.join('\n');

           const tasksList = document.querySelector('#tasksList');
           tasksList.innerHTML = tasksHtml;
        }

        
};



   
    
    newTaskVar = new taskManager();
    newTaskVar.addTask();
