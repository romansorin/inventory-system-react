import axios from 'axios'
import Layout from '@/components/Layout'

const Categories = ({ categories }) => {
  return (
    <Layout>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps () {
  const categories = await axios
    .get('http://127.0.0.1:8000/api/categories/')
    .then(response => response.data)
    .catch(error => {
      throw error
    })

  return {
    props: {
      categories
    }
  }
}

export default Categories
