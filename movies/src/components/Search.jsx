import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const changeSearchInput = (event) => {
        setSearch(event.target.value);
    }

    const searchMovie = async (event) => {
        event.preventDefault();
        try {
            const getMovies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(search)}&api_key=f17c6b82abcc1af74cc075687b8f9384`);
            const movieData = await getMovies.json();
            if (movieData.results.length === 0) {
                throw new Error("No movies found.");
            }
            const movieID = movieData.results[0].id;

            const similarMovies = await fetch( `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=f17c6b82abcc1af74cc075687b8f9384`);
            const similarData = await similarMovies.json();
            navigate('/results', {state: {results: similarData.results, query: search}});
        } catch (e) {
            console.error('Error finding movies: ', e);
        }
    }
    return (
        <>
            <div className='flex flex-col justify-center mt-80 gap-5'>
                <h1 className='flex justify-center text-3xl'>Find Similar Movies Here</h1>
                <div className='flex justify-center'>
                    <form onSubmit={searchMovie}>
                        <input className='pl-2 rounded-bl-md rounded-tl-md outline-0 h-12' type='text' placeholder='Enter a movie' value={search} onChange={changeSearchInput}></input>
                        <button type="submit" className='h-12 w-24 bg-gray-400 text-white rounded-br-md rounded-tr-md hover:bg-gray-600'>Search</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Search;