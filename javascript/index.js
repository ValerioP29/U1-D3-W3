document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("addButton");
  button.addEventListener("click", function () {
    const input = document.getElementById("input");
    const text = input.value.trim();
    if (text) {
      const li = document.createElement("li");
      li.textContent = text;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "ELIMINA";
      deleteButton.addEventListener("click", function () {
        li.remove();
      });
      li.appendChild(deleteButton);
      document.getElementById("taskList").appendChild(li);
      input.value = "";
    } else {
      alert("Non hai inserito il testo");
    }
    console.log("clic avvenuto");
  });
});
