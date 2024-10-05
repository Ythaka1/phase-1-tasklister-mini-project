document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const taskInput = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;

    if (taskInput === "") {
      alert("Please enter a task.");
      return;
    }

    const taskItem = document.createElement("li");
    taskItem.textContent = taskInput;

    if (priority === "high") {
      taskItem.classList.add("high");
    } else if (priority === "medium") {
      taskItem.classList.add("medium");
    } else {
      taskItem.classList.add("low");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

  
    document.getElementById("new-task-description").value = "";
  });
});
