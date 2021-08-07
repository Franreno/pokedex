import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>CHIKA e KAGUYA</title>
      </Head>
      <h1>INHAE</h1>
      <h2>
        <Link href="/">
          <a>pao de queijo</a>
        </Link>
      </h2>
      <Image src="/images/CHIKAKAGUYA.png" width={1200} height={1026} alt="CHIKA E KAGUYA"></Image>
    </Layout>
  )
}
