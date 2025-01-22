import '../App.css'
import Search from '../components/Search.jsx'

const Home = () => {
    return (
        <>
            <div className='flex flex-col justify-center sm:mt-36 gap-5 min-[320px]:mt-16 lg:mt-48'>
                <h1 className='flex justify-center text-3xl text-center'>Find Similar Movies Here</h1>
                <Search/>
            </div>
        </>
    )
}

export default Home