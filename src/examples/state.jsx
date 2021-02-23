import React, { useState } from 'react'

function computeInitialCounter () {
  console.log('calc....')
  return Math.trunc(Math.random() * 20)
}

export default function Index () {
  // let [counter, setCounter] = useState(0)
  const [counter, setCounter] = useState(computeInitialCounter)
  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })
  function increment () {
    // setCounter(counter+1)
    setCounter((prev) => prev + 1)
  }

  function decrement () {
    setCounter(counter - 1)
  }
  function updateTitle () {
    setState(prev => {
      return {
        ...prev,
        title: 'новй заголовок'
      }
    })
  }

  return (
            <div>
                <h1>Counter: {counter}</h1>
                <div className="btn-group">
                    <button className="btn btn-success"
                            onClick={increment}>Add
                    </button>
                    <button className="btn btn-danger"
                            onClick={decrement}>Remove
                    </button>
                    <button className="btn btn-default"
                            onClick={() => { updateTitle() }}>Изменить название
                    </button>
                </div>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
  )
}
