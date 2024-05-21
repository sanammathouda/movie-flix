const APIKEY = import.meta.env.VITE_APIKEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  // fetchPopular: `/movie/popular?api_key=${APIKEY}&language=en-US`,
  fetchAction: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchHorror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchComedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchRomance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentary: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
