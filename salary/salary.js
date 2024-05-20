// Function to calculate the net salary after deductions
function calculateNetSalary(basicSalary, benefits) {
  
    // Define the tax rate, NHIF rate, and NSSF rate
    const taxRate = 0.2;
    const nhifRate = 0.1;
    const nssfRate = 0.2;
  
    // Calculate the gross salary by adding basic salary and benefits
    const grossSalary = basicSalary + benefits;
  
    // Calculate the tax, NHIF, and NSSF based on the gross salary
    const tax = grossSalary * taxRate;
    const nhif = grossSalary * nhifRate;
    const nssf = grossSalary * nssfRate;
  
    // Calculate the net salary by subtracting the deductions from the gross salary
    const netSalary = grossSalary - (tax + nhif + nssf);
  
    // Return an object containing the gross salary, tax, NHIF, NSSF, and net salary
    return {
      grossSalary,
      tax,
      nhif,
      nssf,
      netSalary
    };
  }
  
  // Define the basic salary and benefits
  const basicSalary = 59000;
  const benefits = 4500;
  
  // Call the function to calculate the net salary
  const result = calculateNetSalary(basicSalary, benefits);
  
  // Print the results to the console
  console.log("Net Salary Calculation Results:");
  console.log("Gross Salary:", result.grossSalary);
  console.log("Tax:", result.tax);
  console.log("NHIF Deductions:", result.nhif);
  console.log("NSSF Deductions:", result.nssf);
  console.log("Net Salary:", result.netSalary);
  