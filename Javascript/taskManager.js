window.addEventListener("load", () => {
  newTask = JSON.parse(localStorage.getItem("newTask")) || [];
  //The above targets the name of the todo list, saying that when it loads
  //it will stay the same.

  const nameInput = document.querySelector("#name");
  const newTaskForm = document.querySelector("#newTaskForm");

  const username = localStorage.getItem("username") || "";
  //these are variables targeting the form  Name head
  nameInput.value = username;
  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
    //This keeps the change of the Task list "let's get it together personal input"
  });
  //This part is targets how the form is saved to local after filled out
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newTask = {
      /*formContent*/ newTaskNameInput: e.target.elements.formContent.value,
      /*category*/ newTaskDescription: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };
    newTask.push(newTask); // <<<This is showing an error in DeveloperTools. Uncaught TypeError: newTask.push is not a function.
    //but on line# 20 it was declared.
    localStorage.setItem("newTask", JSON.stringify(newTask));
    //Stores to local storage
    e.target.reset();
    //Once we ticked down what we have it will reset
    DisplayNewTask();
  });
});
// this is going to be how it is going to display, using a global var. calling as soon as our page is loaded.
function DisplayNewTask() {
  const newTaskList = document.querySelector("#newTaskForm");

  newTaskForm.innerHTML = "";

  newTask.array.forEach((newTask) => {
    const newTaskItem = document.createElement("label", "div");
    newTaskItem.classList.add("newTask");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const formContent = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = newTask.done;
    span.classList.add("bubble");

    if (newTask.category == "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }

    formContent.classList.add("newTaskContent");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    formContent.innerHTML =
      '<input type="text" value="${newTask.Content}" readonly>';
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    newTaskItem.appendChild(label);
    newTaskItem.appendChild(formContent);
    newTaskItem.appendChild(actions);

    //need to work out kinks of below code 45:28
    /*todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    }); */
  });
}
