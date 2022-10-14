import Head from 'next/head'
import Image from 'next/image'

import CanvasHero from '../components/canvas/CanvasHero'
import Element1 from '../components/webgl_elements/Element1'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Bespoke Programming</title>
        <meta name="description" content="Bespoke Programming | Portfolio" />
        <link rel="icon" href="/svg/favicon.svg" />
      </Head>

      {/* ---------------------- Canvas ---------------------- */}
      <CanvasHero />

      {/* ---------------------- Hero ---------------------- */}
      <section id='hero'>
        <div>
          <Element1/>
        </div>
      </section>

    </div>
  )
}
