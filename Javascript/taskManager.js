document.getElementById("myBtn").addEventListener("click", displayDate);

const upload = () => {
      const progressBar = document.querySelector('.progress-bar')
      progressBar.setAttribute('id','play-animation')
    }
//what is this doing? please elaborate?
    //FormData.onprogress


function createTaskHtml (id, name, description, assignedTo, dueDate, status)  {
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
        <div class="card data-task-id=${id}" style="width: 18rem";>
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
            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);
            tasksHtmlList.push(taskHtml)
           }

           const tasksHtml = tasksHtmlList.join('\n');

           const tasksList = document.querySelector('#tasksList');
           tasksList.innerHTML = tasksHtml;
        }
    
     save() {
      const tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
         const currentId = String(this.currentId);
       localStorage.setItem('currentId', currentId);
    }
    
      load() {
        if (localStorage.getItem('tasks')) {
       const tasksJson = localStorage.getItem('tasks');
         this.tasks = JSON.parse(tasksJson);
        }
        if (localStorage.getItem('currentId')) {
           const currentId = localStorage.getItem('currentId');
            this.currentId = Number(currentId);
        }
    }
}
    
    
getTaskById(taskId) {
    let foundTask;

    for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
        if (task.id === taskId) {
        foundTask = task;
        }
    }


    return foundTask;
}


        
};



   
    
    newTaskVar = new taskManager();
    newTaskVar.addTask();
