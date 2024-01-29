
export default function calculateInvestmentResults({
    initialinvestment,
    annualinvestment,
    
    duration,
}
  ) {
    const annualData = [];
  
    let currentValue = initialinvestment;
  
    for (let year = 1; year <= duration; year++) {
    
  
      // Calculate value at the end of the year
      const valueEndOfYear = currentValue + annualinvestment ;
  
      // Push the data for the current year to the annualData array
      annualData.push({
        year,
        annualinvestment,
        valueEndOfYear,
      });
  
      // Update the current value for the next iteration
      currentValue = valueEndOfYear;
    }
  
    return annualData;
  }
  