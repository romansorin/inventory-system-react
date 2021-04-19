import Layout from '@/components/Layout'
import axios from 'axios'
import { useState } from 'react'

function CreateItem () {
  const [description, setDescription] = useState('')
  const [replacementLink, setReplacementLink] = useState('')
  const [replacementCost, setReplacementCost] = useState('')
  const [inUse, setInUse] = useState(false)

  const onSubmit = async () => {
    const data = {
      description,
      replacement_link: replacementLink,
      replacement_cost: replacementCost,
      in_use: inUse
    }

    axios
      .post('http://127.0.0.1:8000/api/items/', data)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        throw error
      })
  }

  return (
    <Layout>
      <div className='md:flex md:items-center md:justify-between'>
        <div className='flex-1 min-w-0'>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
            Create Item
          </h2>
        </div>
      </div>
      <div className='my-4 flex flex-col'>
        <form className='space-y-8 divide-y divide-gray-200'>
          <div className='pt-2'>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
              <div className='sm:col-span-6'>
                <label
                  htmlFor='description'
                  className='block text-sm font-medium text-gray-700'
                >
                  Description
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='description'
                    id='description'
                    value={description}
                    onChange={event => setDescription(event.target.value)}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
              </div>

              <div className='sm:col-span-4'>
                <div className='flex items-center'>
                  <input
                    id='in_use'
                    name='in_use'
                    checked={inUse}
                    onChange={() => setInUse(!inUse)}
                    type='checkbox'
                    className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
                  />
                  <label
                    htmlFor='in_use'
                    className='ml-2 block text-sm text-gray-900'
                  >
                    In Use
                  </label>
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='replacement_link'
                  className='block text-sm font-medium text-gray-700'
                >
                  Replacement link
                </label>
                <div className='mt-1'>
                  <input
                    id='replacement_link'
                    name='replacement_link'
                    type='url'
                    value={replacementLink}
                    onChange={event => setReplacementLink(event.target.value)}
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
              </div>

              <div className='sm:col-span-3'>
                <label
                  htmlFor='replacement_cost'
                  className='block text-sm font-medium text-gray-700'
                >
                  Replacement cost
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    value={replacementCost}
                    onChange={event => setReplacementCost(event.target.value)}
                    name='replacement_cost'
                    id='replacement_cost'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='button'
                className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Cancel
              </button>
              <button
                onClick={onSubmit}
                type='button'
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default CreateItem
