// Mobile
// User enters a task in the input box
// User clicks the "+" button to submit the task, which shows up in a list under the input box
// No. of tasks they add gets updated in "Tasks to complete: n"
// User can click checks to tick of tasks
// When they do so a banner telling them the no. of tasks they have selected and a delete button appears at the footer of the page
// When they have no tasks to complete - text saying this shows on the page

// functions which need event listeners
// reset - will reset page to have no tasks added
// add button for task input - will 'submit' the tasks entered by the user and dynamically change the page to list the submissions and add a p tag saying the no. of tasks to complete
// empty box next to tasks- users can fill these buttons with ticks which changes the page to add a banner with a delete button

// Query selectors
const resetPage = document.querySelector(".btn__reset");
const taskSubmit = document.querySelector(".btn__tasks");

const handleSubmit = () => {

}

taskSubmit.addEventListener("click", handleSubmit);