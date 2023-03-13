import Head from 'next/head'
import MainTitle from '@/partials/mainTitle'
import Menu from '@/partials/menu'

export default function Home() {
  return (
    <>
      <Head>
        <title>my page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <MainTitle />
        <Menu />
      </main>
    </>
  )
}
