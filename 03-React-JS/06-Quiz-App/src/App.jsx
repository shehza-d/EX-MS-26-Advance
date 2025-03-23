import React, { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(false)
  useEffect(() => {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setQuestions(res)
      }).catch((err) => {
        console.log(err);
        setError(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  function shuffleArray(arr){
    return arr
    
  }
  return (
    <>
      <h1>Quiz App</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      {questions && <div>
        <h1>Q{index + 1} {questions[index].question.text}</h1>
        {[...questions[index].incorrectAnswers , questions[index].correctAnswer].map((item , index) => {
          return <div key={index}> 
            <input type="radio" name="choice" id={item} />
            <label htmlFor={item}>{item}</label>
          </div>
        })}
        <button onClick={() => setIndex(index + 1)}>next</button>
      </div>}
    </>
  )
}

export default App


// scenario

// noon.com 
// material UI products
// quiz app
// typescript + advance js quiz

// ELIMINATE


