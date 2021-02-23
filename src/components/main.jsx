import React from 'react'
import { useAlert } from '~/alert/AlertContext'

export default function Main () {
  const { toggle } = useAlert()
  return (
            <>
                <h1>Hi context</h1>
                <button onClick={toggle}
                        className={'btn btn-primary'}>Show alert
                </button>
            </>
  )
}
