import Head from 'next/head'
import Link from 'next/link'
import Widget from '@/components/widget'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About this website</title>
      </Head>
      <div>
        <Link href='/'>Back to home</Link>
      </div>
      <div>
        <Widget pageName='about' />
      </div>
    </>
  )
}

export default AboutPage
