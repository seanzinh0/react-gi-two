// component that takes search query as props to show what movie you searched for
const ResultsTitle = ({query}) => {
    return(
        <>
            <h1 className='flex justify-center text-5xl mt-20 mb-20 text-center'>Similar Movies To: "{query}"</h1>
        </>
    )
}

export default ResultsTitle;