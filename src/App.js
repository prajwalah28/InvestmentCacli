import { useState } from "react";
import Header from "./components/Header";
import './App.css'
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import Parent from "./components/Parent";


function App() {
  const [userInput,setUserInput] = useState({
    initialinvestment:1000,
    annualinvestment:1200,

    duration: 10,
});
function handelChange(inputIndentifier,newValue){
  setUserInput((prevUserInput) => {
      return {
          ...prevUserInput,
          [inputIndentifier]:+newValue
      }
  })
}
  return (
    <div className="App">
      <Header/>
      <UserInput userInput={userInput} onhandelChange={handelChange}/>
      <Result input={userInput}/>
      {/* <Parent/> */}
    </div>
  );
}

export default App;
