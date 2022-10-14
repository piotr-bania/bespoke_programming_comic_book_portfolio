import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Bespoke Programming</title>
        <meta name="description" content="Bespoke Programming | Portfolio" />
        <link rel="icon" href="/svg/favicon.svg" />
      </Head>

      {/* ---------------------- Hero ---------------------- */}
      <section id='hero'>
        <div>
          <h1>Bespoke Programming.</h1>
        </div>
      </section>

    </div>
  )
}
