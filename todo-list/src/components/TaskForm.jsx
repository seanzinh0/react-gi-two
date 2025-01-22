const TaskForm = ({createTask , setTitle, setDescription, title, description}) => {

    const submitForm = (e) => {
        createTask(e)
    }

    return (
        <form className='flex flex-col border-2 border-gray-600 rounded-2xl bg-white' onSubmit={submitForm}>
            <input type="text" placeholder='Enter a title' value={title} onChange={(e) => setTitle(e.target.value)}
                   className='w-auto h-12 pl-4 mt-2 mb-2 outline-0 border-b-2 border-gray-600'></input>
            <input type="text" placeholder='Enter a description' value={description}
                   onChange={(e) => setDescription(e.target.value)}
                   className='w-auto h-12 pl-4 outline-0 border-b-2 border-gray-600'></input>
            <button className='bg-zinc-900 text-white w-64 h-16 rounded-xl m-2 hover:bg-zinc-600'>Create Task</button>
        </form>
    )
}

export default TaskForm