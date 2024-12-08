document.addEventListener('DOMContentLoaded', () => {
    const enterbox = document.getElementById("abhi");
    const btncl = document.getElementById("addtaskbtn");
    const store = document.getElementById("store");

    // Load tasks from localStorage or initialize as an empty array
    let task = JSON.parse(localStorage.getItem('tasks')) || [];
    task.forEach(tasks => rendertask(tasks));

    // Add new task
    btncl.addEventListener('click', () => {
        const tasktxt = enterbox.value.trim();
        if (tasktxt === "") {
            console.log("Task input is empty!");
            return;
        }

        const newtask = {
            id: Date.now(),
            text: tasktxt,
            completed: false,
        };

        task.push(newtask);
        savetasks();
        rendertask(newtask); // Render the new task on the page
        enterbox.value = ""; // Clear the input box
        console.log(task);
    });

    // Function to render tasks in the DOM
    function rendertask(taskObj) {
        const li = document.createElement('li');
        li.setAttribute("data-id", taskObj.id);
        if (taskObj.completed) li.classList.add("completed");
        li.innerHTML = `
        <span>${taskObj.text}</span>
        <button>delete</button>
        `;

        // Toggle task completion
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return; // Skip if delete button is clicked
            taskObj.completed = !taskObj.completed;
            li.classList.toggle('completed');
            savetasks();
        });

        // Delete task
        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggle from firing
            task = task.filter(t => t.id !== taskObj.id); // Filter out the deleted task
            li.remove(); // Remove the task from the DOM
            savetasks(); // Update localStorage with the new task list
        });

        store.appendChild(li);
    }

    // Function to save tasks to localStorage
    function savetasks() {
        localStorage.setItem("tasks", JSON.stringify(task));
    }
});
