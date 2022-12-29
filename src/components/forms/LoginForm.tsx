import { signIn, signOut, useSession } from "next-auth/react"

export const LoginForm = () => {
  const {data: sessionData} = useSession();

  return (
    <div className="flex flex-col items-center justify-center bg-white drop-shadow-lg rounded-lg px-12 py-8">
      <button className="bg-gray-300 px-4 py-2 font-bold hover:bg-slate-200 transition-all duration-100 ease-in-out" onClick={sessionData ? () => signOut() : () => signIn("google")}>
        {sessionData ? "Sign out" : "Login with Google"}
      </button>
    </div>
  )
}