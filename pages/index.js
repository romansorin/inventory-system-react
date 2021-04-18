import Layout from '@/components/Layout'
import axios from 'axios'

function Home ({ items }) {
  return (
    <Layout>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps () {
  const items = await axios
    .get('http://127.0.0.1:8000/api/items/')
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
