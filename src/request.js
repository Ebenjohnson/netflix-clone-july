import { Axios } from "axios";

const Api_key = 'bf6d5117e41bbcd7507baec31d9d27cd'


const requests = {
    fetchMovies: `/trending/all/week?api_key=${Api_key}&language=en-US&include_adult=false`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie/?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,

}

export default requests;