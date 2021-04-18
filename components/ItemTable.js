import Item from './Item'

const ItemTable = ({ items }) => {
  return (
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        <tr>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Description
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            In use
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Category
          </th>
          <th
            scope='col'
            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
          >
            Location
          </th>
          <th scope='col' className='relative px-6 py-3'>
            <span className='sr-only'>Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, i) => (
          <Item key={item.id} isEven={i % 2 === 0} item={item} />
        ))}
      </tbody>
    </table>
  )
}

export default ItemTable
