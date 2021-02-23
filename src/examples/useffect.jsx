import React, { useState, useEffect } from 'react'

export default function Index () {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({
    x: 0, y: 0
  })
  const mouseMoveHandler = e => {
    setPos({ x: e.clientX, y: e.clientY })
  }
  // like a mount
  useEffect(() => {
    console.log('ComponentDidMount')
    window.addEventListener('mousemove', mouseMoveHandler)

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  // like a watcher
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => {
      console.log('clean')
    }
  }, [type])

  return (
            <div>
                <h1>Ресур: {type}</h1>
                <button className="btn btn-primary"
                        onClick={() => {
                          setType('users')
                        }}>Пользователь
                </button>
                <button className="btn btn-primary"
                        onClick={() => {
                          setType('todos')
                        }}>Todo
                </button>
                <button className="btn btn-primary"
                        onClick={() => {
                          setType('posts')
                        }}>Посты
                </button>

                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
                <pre>{JSON.stringify(pos, null, 2)}</pre>
            </div>

  )
}
