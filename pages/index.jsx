import Head from "next/head";

import HomePage from "./homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Paulo Reizinho</title>
        <meta name="description" content="Paulo Reizinho Developer Portfolio" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <HomePage />
    </>
  );
}