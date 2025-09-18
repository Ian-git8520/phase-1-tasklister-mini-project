document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskInput = document.getElementById("new-task-description");
  const taskList = document.getElementById("tasks");

  
  form.addEventListener("submit", function (t) {
    t.preventDefault(); 

    const taskText = taskInput.value;

    if (taskText !== "") {
      // -------Create new list item--------
      const li = document.createElement("li");
      li.textContent = taskText;

      // ------------ Add delete button---------
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";

      deleteBtn.style.marginLeft = "10px";

      deleteBtn.style.color = "red"

      deleteBtn.style.backgroundColor = "pink"

      deleteBtn.style.fontFamily = " 'Courier New', Courier, monospace"
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

       const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "5px";
    editBtn.addEventListener("click", () => {
      const input = document.createElement('input');
      input.type = "text";
      input.value = li.firstChild.textContent;
      li.firstChild.replaceWith(input);

      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          li.insertBefore(document.createTextNode(input.value), input);
          input.remove();
        }
      });
    });

      

      li.appendChild(deleteBtn);

      //--------Add the task to the list------------------
      taskList.appendChild(li);

      //--------------- Clear input field-----------
      taskInput.value = "";
    }
  });
});
