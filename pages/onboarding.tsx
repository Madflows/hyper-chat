import React from 'react'
import { useState } from 'react'

export default function OnboardingScreen() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    fullName: "",
    bio: "",
    emailAddress: "",
  })
  return (
    <div className='w-full flex items-center justify-center'>
        <h2>Signed in from magic link</h2>

    </div>
  )
}
