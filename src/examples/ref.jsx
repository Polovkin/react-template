import React, { useState, useEffect, useRef } from 'react'

export default function Index () {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  useEffect(() => {
    console.log(inputRef.current)
    renderCount.current++
  })

  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()
  return (
            <div>
                <h1>{renderCount.current}</h1>
                <h2>Pre state: {prevValue.current}</h2>
                <input ref={inputRef}
                       type="text"
                       onChange={e => setValue(e.target.value)}
                       value={value}/>
                <button className="btn btn-success"
                        onClick={focus}>Focus
                </button>
            </div>

  )
}
