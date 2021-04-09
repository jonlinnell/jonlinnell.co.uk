import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jon Linnell</title>
        <link rel="shortcut icon" type="image/png" href="/icon.png" />
      </Head>

      <main>
        <h1 className="text-2xl text-green-600">Hello</h1>
        <p>More stuff to come, at some point.</p>
      </main>
    </div>
  );
}
