function addTask() {

    var taskname = document.getElementById("taskname").value;
    var todo = document.getElementById("todo");
    var todoDiv = document.createElement("div");
    var todoName = document.createElement("li");
    var deleteBtn = document.createElement("i");
   
    deleteBtn.classList.add("fa-sharp");
    deleteBtn.classList.add("fa-solid");
    deleteBtn.classList.add("fa-trash");

    todoName.innerHTML = taskname;

    todoDiv.appendChild(todoName);
    todoDiv.appendChild(deleteBtn);

    todo.appendChild(todoDiv);
}

var todo = document.getElementById("todo");
todo.addEventListener("click", removeElement);

function removeElement(event) {
    const element = event.target;
    
    if(element.classList[0] == "fa-sharp"){
        element.parentElement.remove();
    }
}
