const addWaterBtn = document.getElementById("addWaterBtn"); // Get the add water button element
const resetBtn = document.getElementById("resetBtn"); // Get the reset button element
const totalWaterSpan = document.getElementById("totalWater"); // Get the total water consumed span element
const waterIntakeList = document.getElementById("waterIntakeList"); // Get the water intake list element
const waterGoalInput = document.getElementById("waterGoal"); // Get the water goal input element
const progressBar = document.getElementById("progress"); // Get the progress bar element
const goalReachedMessage = document.getElementById("goalReachedMessage"); // Get the goal reached message element

let totalWater = 0; // Initialize the total water consumed variable to 0
let timestamps = []; // Initialize the timestamps array to an empty array
let dailyGoal = parseInt(waterGoalInput.value, 10); // Get the daily goal value from the input element and convert it to an integer
let goalReached = false; // Initialize the goal reached flag to false

function updateUI() {
    // Update the UI by setting the total water consumed, water intake list, progress bar, and goal reached message elements
    totalWaterSpan.textContent = totalWater;
    waterIntakeList.innerHTML = timestamps.map((time) => `<li>${time}</li>`).join("");
    updateProgress();

    if (totalWater >= dailyGoal && !goalReached) {
        // If the total water consumed is greater than or equal to the daily goal and the goal reached flag is false,
        goalReached = true;
        goalReachedMessage.textContent = "Congratulations! You reached your daily water goal!";
    } else if (totalWater < dailyGoal) {
        // Otherwise, if the total water consumed is less than the daily goal,
        goalReached = false;
        goalReachedMessage.textContent = "";
    }
}

function updateProgress() {
    // Update the progress bar by calculating the progress percentage and setting the style width property of the progress bar element
    const progressPercentage = (totalWater / dailyGoal) * 100;
    progressBar.style.width = progressPercentage + "%";
}

addWaterBtn.addEventListener("click", function() {
    // When the add water button is clicked,
    totalWater++; // Increase the total water consumed by 1
    const now = new Date().toLocaleTimeString(); // Get the current time in local time string format
    timestamps.push(now); // Add the current time to the timestamps array
    updateUI(); // Update the UI
});

resetBtn.addEventListener("click", function() {
    // When the reset button is clicked,
    totalWater = 0; // Set the total water consumed to 0
    timestamps = []; // Clear the timestamps array
    updateUI(); // Update the UI
});

waterGoalInput.addEventListener("change", function() {
    // When the water goal input element is changed,
    dailyGoal = parseInt(waterGoalInput.value, 10); // Set the daily goal to the value of the input element
    updateUI(); // Update the UI
});

updateUI(); // Call the updateUI() function to initialize the UI
