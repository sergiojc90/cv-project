import React from "react"
import Education from "./components/Education"
import EmploymentHistory from "./components/EmploymentHistory"
import PersonalDetails from "./components/PersonalDetails"
import Preview from "./components/Preview"
import ProfessionalSumary from "./components/ProfessionalSummary"
import Skills from "./components/Skills"
import Websites from "./components/Websites"


function App() {
  return (
    <div className="App">s
      <PersonalDetails/>
      <Education/>
      <EmploymentHistory/>
      <Preview/>
      <ProfessionalSumary/>
      <Skills/>
      <Websites/>
    </div>
  );
}

export default App;
