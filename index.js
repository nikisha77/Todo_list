const task = document.getElementById("task");
const list = document.getElementById("list");

function addTask() {
    const task_value = task.value.trim();
    if (task_value !== "") {
        const li = document.createElement("li");
        li.textContent = task_value;
        li.addEventListener("click", completeTask);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", deleteTask);
        li.appendChild(deleteBtn);

        list.appendChild(li);
        task.value = "";
    }
}

function completeTask(event) {
    const task = event.target;
    if (task.tagName !== "BUTTON") {
        task.classList.toggle("done");
    }
}

function deleteTask(event) {
    event.stopPropagation();
    const li = event.target.parentElement;
    list.removeChild(li);
}
