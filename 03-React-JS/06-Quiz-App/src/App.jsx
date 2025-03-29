import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState(null)
  const [index, setIndex] = useState(0)
  const [error, setError] = useState(false)
  const [result , setResult] = useState(0);

  const input = useRef([]);
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

  function shuffleArray(arr) {
    const emptyArr = []
    const shuffleArr = []
    for (let i = 0; i < arr.length; i++) {
      const randomNumber = Math.floor(Math.random() * arr.length)
      if (emptyArr.includes(randomNumber)) {
        // console.log("number already mujood ha");
        i--
      } else {
        emptyArr.push(randomNumber)
        // console.log(randomNumber);
        shuffleArr[randomNumber] = arr[i]
      }

    }
    return shuffleArr

  }

  function nextQuestion() {
    const selectedOption = input.current.find(item => item && item.checked);
    console.log(selectedOption.value);

    if(questions[index].correctAnswer === selectedOption.value){
      setResult(result + 10)
    }

    
    index < questions.length - 1 ? setIndex(index + 1) : null
  }
  return (
    <>
      <h1>Quiz App</h1>
      <h1>Result {result} / 100</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error occured</h1>}
      {questions && <div>
        <h1>Q{index + 1} {questions[index].question.text}</h1>
        {shuffleArray([...questions[index].incorrectAnswers, questions[index].correctAnswer]).map((item, index) => {
          return <div key={index}>
            <input type="radio" name='question' value={item} id={item} ref={el => input.current[index] = el} />
            <label htmlFor={item}>{item}</label>
          </div>
        })}
        <button onClick={nextQuestion}>next</button>
      </div>}
    </>
  )
}

export default App


// scenario

// noon.com 
// material UI products
// typescript + advance js quiz
// quiz app (next week)

// ELIMINATE


