export const Apikey = process.env.REACT_APP_TMDB_KEY;

export const Baseurl ='https://api.themoviedb.org/3'

export const imageurl = 'https://image.tmdb.org/t/p/original'

export const trailerkeylink = `https://api.themoviedb.org/3/movie/574475/videos?api_key=${Apikey}`
export const yotubebaseurl = `https://www.youtube.com/watch?v=`

export const TrendingUrl = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${Apikey}`
export const netflixorginal = `https://api.themoviedb.org/3/discover/tv?api_key=${Apikey}&with_networks=213`
export  const actionmovie =`/discover/movie?api_key=${Apikey}&with_genres=28`
export  const ComedyMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${Apikey}&with_genres=35`
export  const HorrorMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${Apikey}&with_genres=27`
export  const RomanceMovies =`https://api.themoviedb.org/3/discover/movie?api_key=${Apikey}&with_genres=10749`
export  const Documentaries =`https://api.themoviedb.org/3/discover/movie?api_key=${Apikey}&with_genres=99`
export const malayalamMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${Apikey}&with_original_language=ml&language=en-US&page=1&sort_by=popularity.desc`

export const PopolarinIndiaMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${Apikey}&with_origin_country=IN&sort_by=popularity.desc&with_release_type=3|2&region=IN`
export const TopMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${Apikey}&language=en-US&page=1`



export const SearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${Apikey}&query=`