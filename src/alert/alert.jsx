import React from 'react'
import { useAlert } from '~/alert/AlertContext'

export default function Alert () {
  const alert = useAlert()

  if (!alert.visible) return null

  return (
            <>
                <div className={'alert alert-danger'}
                     onClick={alert.toggle}>
                    Alert!
                </div>
            </>
  )
}
