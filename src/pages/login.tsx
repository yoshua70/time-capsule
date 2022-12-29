import { NextPage } from "next";
import Head from "next/head";
import { LoginForm } from "../components/forms/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <>
    <Head>
      <title>Login</title>
      <meta name="description" content=""/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Login</h1>
      <LoginForm/>
    </main>
    </>
  )
}

export default LoginPage;