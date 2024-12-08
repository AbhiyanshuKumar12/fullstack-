const todoinput = document.getElementById("To-Do");
const addtaskbtn = document.getElementById("addtaskbtn");
const todo = document.getElementById("todolist");

let task = [];

addtaskbtn.addEventListener("click", () => {
    const tasktext = todoinput.value.trim();
    if (tasktext === "") return; // Fix typo in variable name

    const newtask = {
        id: Date.now(), // Fix typo in method name
        text: tasktext,
        completed: false,
    };

    task.push(newtask);
    todoinput.value = ""; // Fix clearing the input field
    console.log(task);
});
