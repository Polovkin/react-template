import React, { } from 'react'
import Main from '~/components/main'
import Alert from '~/alert/alert'
import { AlertProvider } from '~/alert/AlertContext'

export default function Index () {
  return (
           <AlertProvider>
                <div className={'container pt-3'}>
                    <Alert/>
                    <Main toggle={() => {}}/>

                </div>
           </AlertProvider>
  )
}
