import '../App.css'
import {useLocation} from 'react-router-dom'
import MovieCards from '../components/MovieCards.jsx'
import ResultsTitle from "../components/ResultsTitle.jsx";
import Search from "../components/Search.jsx";

const Results = () => {
    const location = useLocation();
    const {results = [], query = ''} = location.state || {};
    return(
        <>
            <ResultsTitle props={query}/>
            <div className='mb-20'>
            <Search/>
            </div>
            <div className='flex justify-center'>
            <MovieCards props={results}/>
            </div>
        </>
    )
}

export default Results;