import React from 'react'
import Card from '../Ui/Card/Card'

const Auth = ({clickLogInHandler}) => {
  return (
    <div>
        <Card>
            <p>برای ادامه وارد شوید</p>
            <button onClick={clickLogInHandler} >ورود</button>
        </Card>
    </div>
  )
}

export default Auth