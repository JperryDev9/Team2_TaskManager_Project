const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

function validFormFieldInput(data) {
  const name = document.querySelector("#name").value;
  const assignedTo = document.querySelector("#assignedTo").value;
  const description = document.querySelector("#description").value;
  const dueDate = document.querySelector("#dueDate").value;
  const status = document.querySelector("#status").value;
  
  TaskManager.addTask(name, description, assignedTo, dueDate, status);
  
  /*console.log("name:  "+name);
  console.log("name:  "+assignedTo);
  console.log("name:  "+description);
  console.log("name:  "+dueDate);
  console.log("name:  "+status);*/
  

    TaskManager.render();

    name.value = '';
    description.value = '';
    assignedTo.value = '';
    dueDate.value = '';
    status.value = '';
  
  /*const "" = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
    }
  }*/
  
});
