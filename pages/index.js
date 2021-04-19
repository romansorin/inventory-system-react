import Layout from '@/components/Layout'
import ItemTable from '@/components/ItemTable'
import axios from 'axios'

function Home ({ items }) {
  return (
    <Layout>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='flex-1 min-w-0'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
            Inventory
          </h2>
        </div>
        <div className='mt-4 flex md:mt-0 md:ml-4'>
          <button
            type='button'
            className='ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Add
          </button>
        </div>
      </div>
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
