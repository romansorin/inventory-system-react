import ItemTable from '@/components/ItemTable'
import Layout from '@/components/Layout'
import axios from 'axios'

function Home ({ items }) {
  return (
    <Layout>
      <div className='my-12 flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <ItemTable items={items} />
            </div>
          </div>
        </div>
      </div>
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
