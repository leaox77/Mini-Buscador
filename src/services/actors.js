import { NINJA_API_KEY as API_KEY } from "../constants"

export const searchActors = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/celebrity?name=${search}`, {
      headers: {
        'X-Api-Key': API_KEY
      }
    })
    const json = await response.json()

    if (json.length === 0) {
      return []
    }

    const actors = json.map(actor => ({
      name: actor.name,
      gender: actor.gender,
      nationality: actor.nationality,
      birthday: actor.birthday
    }))

    return actors
  } catch (e) {
    throw new Error('Error al buscar los actores')
  }
}
