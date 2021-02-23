import React, { useState, useEffect, useRef, useMemo } from 'react'

function complexCompute (num) {
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

export default function Index () {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'red' : 'black'
  }), [colored])

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('Styles changed')
  }, [styles])

  return (
            <div>
                <h1 style={styles}>Computed: {computed}</h1>
                <button className={'btn btn-primary'}
                        onClick={() => setNumber(prev => prev + 1)}>Add
                </button>
                <button className={'btn btn-primary'}
                        onClick={() => setNumber(prev => prev - 1)}>Remove
                </button>
                <button className={'btn btn-primary'}
                        onClick={() => setColored(prev => !prev)}>Change
                </button>
            </div>

  )
}
