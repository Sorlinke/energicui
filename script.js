// Select the input, button, and list elements
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTodo() {
    const task = input.value;
    
    // Only add if input is not empty
    if (task.trim() !== "") {
        const li = document.createElement('li'); // Create a new list item
        li.innerHTML = `${task} <button>Delete</button>`; // Add task and delete button
        todoList.appendChild(li); // Append the new item to the list
        input.value = ""; // Clear the input field

        // Delete task when delete button is clicked
        li.querySelector('button').addEventListener('click', function() {
            todoList.removeChild(li);
        });
    } else {
        alert('Please enter a task!');
    }
}

// Event listener for the "Add" button
addButton.addEventListener('click', addTodo);

// Option to use Enter key to add task
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});


