const api_key = "84eefcf8ce44f25f5a009131c94b29cf";
const base_url = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${base_url}/movie/popular?api_key=${api_key}`);
    const data =await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results
};