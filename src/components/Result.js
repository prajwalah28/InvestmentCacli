import './Result.css'
import React from 'react'
import calculateInvestmentResults from './Calculate';
export default function Result({input}) {
    console.log(input);
    const Resultdata = calculateInvestmentResults(input)
    console.log(Resultdata);
  return (
    
    <div className="Result">
      <h2>Result</h2>
      <table className="tabel">
        <thead>
          <tr>
            <th>Year</th>
            <th>Annual Investment</th>
            
            <th>Value at End of Year</th>
          </tr>
        </thead>
        <tbody>
          {Resultdata.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.annualinvestment}</td>
            
              <td>{data.valueEndOfYear}</td>
            </tr>
          ))}
          <p>prajwal‹</p>
        </tbody>
      </table>
    </div>
  )
}
