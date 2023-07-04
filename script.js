


let listOfTasks = []
let listOfIds = []
let input = document.getElementById("input-task");
let add = document.getElementById("button-addon2");
let clearall = document.getElementById("clearAll");

let todos = document.getElementById("todoContainer");




add.addEventListener("click", function () {
    let value = input.value;
    if (value !== "") {
        listOfTasks.push(value);
        let h6 = document.createElement("p");
        listOfIds.push(h6);
        h6.style.fontSize = "20px";
        h6.style.marginLeft = "8px"
        h6.innerHTML = value;
        todos.appendChild(h6);
        input.value = "";

        h6.addEventListener("click", function () {
            h6.style.textDecoration = "line-through";
        });
        h6.addEventListener("dblclick", function () {
            todos.removeChild(h6);
        });
    } else {
        alert("Please add some tasks");
    }
});




clearall.addEventListener("click", function () {
    listOfTasks = [];
    todoContainer.innerHTML = null;
})





