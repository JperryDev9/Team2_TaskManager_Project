taskHtml = createTaskHtml(
  "Generation",
  "web developer",
  "Anna",
  "20th July",
  "TODO"
);
console.log(taskHtml);



const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (event) => {

    if (event.target.classList.contains('done-button')) {
     const parentTask = event.target.parentElement.parentElement;
       const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
          task.status = 'DONE';
           taskManager.render();
    }
});
