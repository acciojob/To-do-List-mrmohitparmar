// Get references
let btn = document.getElementById("addTodoBtn");
let input = document.getElementById("newTodoInput");
let ol = document.getElementById("todoList");

// Add todo function
function add() {
    let v = input.value.trim();
    if (v !== "") {
        let li = document.createElement("li"); // create li element
        li.textContent = v;                    // set text
        ol.appendChild(li);                    // append to ol
        input.value = "";                       // clear input
    }
}

// Add event listener
btn.addEventListener("click", add);
