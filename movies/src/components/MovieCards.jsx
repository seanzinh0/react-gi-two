const MovieCards = ({props}) => {
    return(
        <>
            <div>
                {props.map((movie) => (
                    <div key={movie.id} className='flex max-w-7xl mb-16 gap-5  border-2 border-gray-600 rounded-md p-4 bg-white hover:shadow-2xl transition ease-in-out delay-75 duration-500 hover:scale-110 w-auto mx-4 min-[320px]:flex-col sm:flex-row'>
                        <img className='max-h-96 w-auto' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}/>
                        <div className='sm:border-l-2 sm:border-t-0 border-gray-600 pl-4 min-[320px]:border-t-2 min-[320px]:pt-2'>
                            <h3 className='text-3xl font-semibold'>{movie.title}</h3>
                            <p className='text-xl'>Release Date: {movie.release_date}</p>
                            <p className='text-xl'>Rating: {movie.vote_average}</p>
                            <p className='text-xl'>Overview: {movie.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieCards;