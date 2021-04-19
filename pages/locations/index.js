import axios from 'axios'
import Layout from '@/components/Layout'

const Locations = ({ locations }) => {
  return (
    <Layout>
      <ul>
        {locations.map(location => (
          <li key={location.id}>{location.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps () {
  const locations = await axios
    .get('http://127.0.0.1:8000/api/locations/')
    .then(response => response.data)
    .catch(error => {
      throw error
    })

  return {
    props: {
      locations
    }
  }
}

export default Locations
