const Item = ({ isEven, item }) => {
  return (
    <tr className={`${isEven} ? 'bg-gray-50' : 'bg-white'`}>
      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
        {item.description}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {item.in_use ? 'True' : 'False'}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {item.category?.name || 'None'}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
        {item.location?.name || 'None'}
      </td>
      <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
        <a href='#' className='text-indigo-600 hover:text-indigo-900'>
          Edit
        </a>
      </td>
    </tr>
  )
}

export default Item
