import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  // state for displaying/getting questions
  const [qAs, setQAs] = useState([])

  // fetch qa data from server and store in state as array
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => r.json())
      .then(qAs => {
        setQAs(qAs)
      })
  },[])

  // setPage with updated formData from fetch (from QuestionForm)
  function handleQASetting(formDataObj) {
    setPage([...qAs, formDataObj])
  }

  function handleStateDel(qAIDToDel) {
    const updatedDeletedArr = qAs.filter(qA => qA.id !== qAIDToDel)
    setQAs(updatedDeletedArr)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm handleQASetting={handleQASetting}/> : <QuestionList qAs={qAs} handleStateDel={handleStateDel}/>}
    </main>
  );
}

export default App;
