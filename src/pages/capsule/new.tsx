import { NextPage } from "next";
import Head from "next/head";
import { NewCapsuleForm } from "../../components/forms/NewCapsuleForm";

const NewCapsulePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center rounded-lg bg-white px-12 py-8 drop-shadow-lg">
          <h1>Create a new capsule</h1>
          <NewCapsuleForm />
        </div>
      </main>
    </>
  );
};

export default NewCapsulePage;
