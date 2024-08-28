function addTask() {
  const inputTask = document.getElementById("input");
  const inputText = inputTask.value;

  const divTask = document.createElement("div");
  divTask.textContent = inputText;
  const lastTask = document.getElementById("lastTask");
  lastTask.appendChild(divTask);
}
addTask();
