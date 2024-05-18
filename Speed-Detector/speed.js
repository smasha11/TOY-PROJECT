function calculateDemeritPoints(speed) {
  const speedLimit = 70; // Speed limit in km/h
  let demeritPoints = 0; // Initialize demerit points to 0

  // Check if the speed exceeds the speed limit
  if (speed > speedLimit) {
      // Calculate demerit points: 1 point for every 5 km/h over the speed limit
      demeritPoints = Math.floor((speed - speedLimit) / 5);
  }

  return demeritPoints; // Return the calculated demerit points
}

function main() {
  // Prompt the user to enter the speed of the car
  const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"));

  // Calculate the demerit points based on the entered speed
  const demeritPoints = calculateDemeritPoints(speed);

  // If there are any demerit points
  if (demeritPoints > 0) {
      console.log("Points:", demeritPoints);
      // Check if the demerit points exceed 12, which results in license suspension
      if (demeritPoints > 12) {
          console.log("License suspended");
      }
  } else {
      // If no demerit points, print "Ok"
      console.log("Ok");
  }
}

// Call the main function to run the program
main();
