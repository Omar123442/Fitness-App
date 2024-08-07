let stepCount = 0;
let lastAcceleration = { x: 0, y: 0, z: 0 };
let threshold = 10; 
let caloriesPerStep = 0.05; 

let stepsElement = document.getElementById("steps");
let caloriesElement = document.getElementById("calories");
let statusElement = document.getElementById("status");


function handleMotion(event) {
    let acceleration = event.accelerationIncludingGravity;

    if (!acceleration) return; 

    let deltaX = Math.abs(acceleration.x - lastAcceleration.x);
    let deltaY = Math.abs(acceleration.y - lastAcceleration.y);
    let deltaZ = Math.abs(acceleration.z - lastAcceleration.z);

    if (deltaX > threshold || deltaY > threshold || deltaZ > threshold) {
        stepCount++;
        stepsElement.textContent = `Steps: ${stepCount}`;

        // Calculate calories burned
        let caloriesBurned = stepCount * caloriesPerStep;
        caloriesElement.textContent = `Calories Burned: ${caloriesBurned.toFixed(2)}`;
    }

    lastAcceleration = {
        x: acceleration.x,
        y: acceleration.y,
        z: acceleration.z
    };
}


if (window.DeviceMotionEvent) {
    statusElement.textContent = "DeviceMotionEvent is supported.";
    window.addEventListener('devicemotion', handleMotion, true);
} else {
    statusElement.textContent = "DeviceMotionEvent is not supported on this device.";
}



