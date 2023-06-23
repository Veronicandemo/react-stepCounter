import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]
const App = () => {
  const [step, setState] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const previousBtnHandler = () => {
    if (step > 1) setState((curstep) => curstep - 1)
  }
  const nextBtnHandler = () => {
    if (step < 3) setState((curStep) => curStep + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={previousBtnHandler}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: '#7950f2', color: '#fff' }}
              onClick={nextBtnHandler}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}
export default App
