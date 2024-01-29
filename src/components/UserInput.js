

import './UserInput.css'
export default function UserInput({onhandelChange, userInput}) {
    
   
  return (
    <div className="userinput">
    <p>

    <label>Intial Investment :</label>
       <input type="number" required 
        value={userInput.initialinvestment}
       onChange={(e) => onhandelChange('initialinvestment',e.target.value)}/>
    </p>
       <p>
       <label>Annual Investment :</label>
       <input type="number" required 
        value={userInput.annualinvestment}
       onChange={(e) => onhandelChange('annualinvestment',e.target.value)}/>
        
       </p>
     
       <p>
       <label>Duration :</label>
       <input type="number" required 
        value={userInput.duration}
       onChange={(e) => onhandelChange('duration',e.target.value)}/>
       </p>
    </div>
  )
}
