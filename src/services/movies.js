import { OMDB_API_KEY as API_KEY } from "../constants"

export const searchMovies = async ({search}) => {
    if (search == '') return null

    try {
        console.log({API_KEY})
        const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
        const json = await response.json()
    
        const movies = json.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error al buscar las peliculas')
    }
    }