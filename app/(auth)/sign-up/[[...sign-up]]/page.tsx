import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <main className="auth-page flex flex-row min-h-screen justify-center items-center">
      <SignUp />
    </main>
  )
}

export default SignUpPage