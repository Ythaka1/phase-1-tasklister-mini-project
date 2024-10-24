document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", function(event) {
    event.preventDefault();  

    //  the task list element
    const tasksList = document.getElementById("tasks");

    //  task description and priority from the form
    const taskDescription = document.getElementById("new-task-description").value;
    const taskPriority = document.getElementById("priority").value;

    //  task description is not empty
    if (taskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    // Creating a new list item (li) for the task
    const newTask = document.createElement("li");
    newTask.textContent = taskDescription;

    // Assign color based on priority
    if (taskPriority === "high") {
      newTask.style.color = "red";
    } else if (taskPriority === "medium") {
      newTask.style.color = "yellow";
    } else {
      newTask.style.color = "green";
    }

    //  delete button to each task
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      newTask.remove();
    });

    newTask.appendChild(deleteBtn);
    tasksList.appendChild(newTask);

   
    taskForm.reset();
  });

  
  document.getElementById("sort-asc").addEventListener("click", () => {
    sortTasks(true);
  });

  document.getElementById("sort-desc").addEventListener("click", () => {
    sortTasks(false);
  });
});
