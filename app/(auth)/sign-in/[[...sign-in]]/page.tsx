import { SignIn } from '@clerk/nextjs';
import React from 'react'

function page() {
  return (
    <main className="auth=page flex flex-row min-h-screen justify-center items-center">
        <SignIn />
    </main>
  )
}

export default page;