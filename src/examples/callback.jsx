import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import ItemsList from '~/ItemsList'

export default function Index () {
  const [count, setCount] = useState(5)
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({
    color: colored ? 'red' : 'black'
  }), [colored])

  const generateItemsFromAPI = useCallback((indexNumber = 2) => {
    return new Array(count)
      .fill('')
      .map((_, i) => `Элемент ${i + indexNumber}`)
  }, [count])

  return (
            <div>
                <h1 style={styles}>Computed: {count}</h1>
                <button className={'btn btn-primary'}
                        onClick={() => setCount(prev => prev + 1)}>Add
                </button>
                <button className={'btn btn-primary'}
                        onClick={() => setColored(prev => !prev)}>Remove
                </button>

                <ItemsList getItems={generateItemsFromAPI}/>
            </div>
  )
}
