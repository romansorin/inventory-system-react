import Head from 'next/head'
import Header from './Header'

const Layout = ({
  children,
  title = 'Inventory System',
  description = 'An inventory system built on Next and Django'
}) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
    </Head>
    <Header />
    <main>{children}</main>
  </>
)

export default Layout
