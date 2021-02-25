import React from 'react'
import { useAlert } from '~/alert/AlertContext'

export default function Main () {
  const { show } = useAlert()
  return (
            <>
                <h1>Hi context</h1>
                <button onClick={() => {
                  show('main.js')
                }}
                        className={'btn btn-primary'}>Show alert
                </button>
            </>
  )
}
