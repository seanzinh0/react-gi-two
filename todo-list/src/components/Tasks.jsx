import {Link} from 'react-router-dom';

const Tasks = ({tasks, deleteTask}) => {
    // maps tasks out based on the tasks array and adds the prop of deleteTask as function for the delete button also links details to the details page based off the id of the task
    return (
        <ul className='flex flex-col gap-5 mt-4'>
            {tasks.map((task) => (
                <li key={task.id}
                    className='flex gap-5 bg-white justify-between border-2 border-gray-600 p-4 h-16 items-center rounded-2xl'>
                    <input type='checkbox' className='size-6 accent-green-500'></input>
                    <p>{task.title}</p>
                    <div className='flex gap-2'>
                    <Link to={`/details/${task.id}`} state={{task}}>
                        <button className='bg-zinc-900 text-white h-8 w-24 rounded-xl hover:bg-zinc-600'>Details
                        </button>
                    </Link>
                    <button onClick={() => deleteTask(task.id)}
                            className='bg-red-600 text-white h-8 w-24 rounded-xl hover:bg-red-400'>Delete
                    </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Tasks;