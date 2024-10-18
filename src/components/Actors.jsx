import { useState } from 'react'
import { searchActors } from '../services/actors'

function Actors() {
  const [actors, setActors] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    try {
      const result = await searchActors({ search })
      setActors(result)
      setError(null)
    } catch (err) {
      setError('Error al buscar actores')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Buscador de Actores</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar actores..."
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {actors?.map((actor, index) => (
          <li key={index}>
            <h3>{actor.name}</h3>
            <p>Género: {actor.gender}</p>
            <p>Nacionalidad: {actor.nationality}</p>
            <p>Fecha de nacimiento: {actor.birthday}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Actors
