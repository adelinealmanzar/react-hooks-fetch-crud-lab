import React, { useState, useEffect } from "react";

function QuestionList({ qAs, handleStateDel }) {


  function handleClick(qA) {
    console.log(qA)

    // pass in QA to del
    fetch(`http://localhost:4000/questions/${qA.id}`, {
      method: 'DELETE',
    })
    handleStateDel(qA.id)
  }

  // Display a list of questions from state -> commented out for the moment to debug
  const displayQ = qAs.map(qA => {
    return (
      <li key={qA.prompt}>
        {qA.prompt}
        <button onClick={() => handleClick(qA)}>Delete Question</button>
      </li>
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQ}</ul>
    </section>
  );
}

export default QuestionList;
