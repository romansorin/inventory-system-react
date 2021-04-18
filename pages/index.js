import Head from 'next/head'

function Home ({ items }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      </Head>

      <main>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.description}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps () {
  const res = await fetch('http://127.0.0.1:8000/api/items')
  const items = await res.json()

  return {
    props: {
      items
    }
  }
}

export default Home
