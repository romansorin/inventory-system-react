import axios from 'axios'

const Location = ({ location }) => {
  return <div>{location.name}</div>
}

export async function getStaticPaths () {
  const locations = await axios
    .get(`http://127.0.0.1:8000/api/locations/`)
    .then(response => response.data)
    .catch(error => {
      throw error
    })

  const paths = locations.map(location => ({
    params: { id: location.id.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const location = await axios
    .get(`http://127.0.0.1:8000/api/locations/${params.id}`)
    .then(response => response.data)
    .catch(error => {
      throw error
    })

  return {
    props: {
      location
    }
  }
}

export default Location
