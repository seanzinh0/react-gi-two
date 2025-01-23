const Details = ({title, setTitle, description, setDescription, updateTask}) => {
    return (
        <form onSubmit={updateTask} className='flex flex-col w-1/3 border-2 border-gray-600 rounded-2xl items-center bg-white'>
            <label className='text-2xl text-center mt-3'>Title:</label>
            <textarea className='text-xl  my-3 text-center border-2 border-gray-600 rounded-md outline-0 px-2' value={title} onChange={e => setTitle(e.target.value)}/>
            <label className='text-2xl text-center'>Description:</label>
            <textarea value={description} className='text-xl my-3 text-center border-t-2 border-2 border-gray-600 rounded-md outline-0 px-2' onChange={e => setDescription(e.target.value)}/>
            <button type='submit' className='bg-zinc-900 text-white w-64 h-16 rounded-xl mb-3 hover:bg-zinc-600'>Save Changes</button>
        </form>
    )
}

export default Details;