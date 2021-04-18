import Head from 'next/head'
import axios from 'axios'

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
  const items = await axios
    .get('http://127.0.0.1:8000/api/items')
    .then(response => response.data)
    .catch(error => {
      throw error
    })

  return {
    props: {
      items
    }
  }
}

export default Home
