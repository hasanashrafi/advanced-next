import Head from "next/head";


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <Head>
        <title>Advanced-Next.Js</title>
      </Head>
      <div className="z-10 max-w-5xl w-full items-center justify-between  text-sm lg:flex">
        <h1 className="text-indigo-600 text-4xl font-semibold font-mono">Next.Js Advanced </h1>
      </div>
    </main>
  );
}
