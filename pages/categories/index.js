import axios from 'axios'
import Layout from '@/components/Layout'

const Categories = ({ categories }) => {
  return (
    <Layout>
      <div class='md:flex md:items-center md:justify-between'>
        <div class='flex-1 min-w-0'>
          <h2 class='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
            Categories
          </h2>
        </div>
      </div>

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
