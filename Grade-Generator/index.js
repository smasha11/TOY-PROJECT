
// Function to calculate the grade based on the given mark
function calculateGrade(mark) {
// If mark is greater than 79, return 'A'
    if (mark > 79) {
      return 'A';

 // If mark is between 60 and 79 , return 'B'
    } else if (mark >= 60) {
      return 'B';
// If mark is between 50 and 59 , return 'C'    
    } else if (mark >= 50) {
      return 'C';

// If mark is between 40 and 49 , return 'D'
    } else if (mark >= 40) {
      return 'D';
 // If mark is less than 40 return 'E' 
    } else {
      return 'E';
    }
  }

  // Function to prompt the user for a mark and generate the grade
  function studentGradeGenerator() {
    const mark = (prompt('Enter the student mark (0-100):'));
  
    // Check if the input is not a number, or if it's outside the range (0-100)
    if (isNaN(mark) || mark < 0 || mark > 100) {
      return 'Invalid input. Please enter a valid mark between 0 and 100.';
    }
  
 
    const grade = calculateGrade(mark);

    return `The student's grade is: ${grade}`;
  }
  
   // Call the studentGradeGenerator function and store the result
  const result = studentGradeGenerator();

  // Log the result to the console
  console.log(result);
  