import '../App.css'
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
            title: e.target[0].value,
            description,
            id: tasks.length + 1
        }
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        e.target[0].value = "";
        setDescription('')
    }

    const deleteTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks)
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    return (
        <>
            <div className='flex flex-row justify-center gap-x-48 mt-16'>
                <div>
                    <h1 className='text-3xl mb-4 text-center'>Create A Task</h1>
                    <form className='flex flex-col border-2 border-gray-600 rounded-2xl bg-white' onSubmit={createTask}>
                        <input type="text" placeholder='Enter a title' value={title} onChange={(e) => setTitle(e.target.value)} className='w-auto h-12 pl-4 mt-2 mb-2 outline-0 border-b-2 border-gray-600'></input>
                        <input type="text" placeholder='Enter a description' value={description} onChange={(e) => setDescription(e.target.value)} className='w-auto h-12 pl-4 outline-0 border-b-2 border-gray-600'></input>
                        <button className='bg-zinc-900 text-white w-64 h-16 rounded-xl m-2 hover:bg-zinc-600'>Create Task</button>
                    </form>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl text-center'>Tasks</h1>
                    {tasks.length > 0 ? (
                    <ul className='flex flex-col gap-5 mt-4'>
                        {tasks.map((task) => (
                            <li key={task.id} className='flex gap-5 justify-center bg-white border-2 border-gray-600 p-4 h-16 items-center rounded-2xl'>
                                <input type='checkbox' className='size-6'></input>
                                <p>{task.title}</p>
                                <Link to={`/details/${task.id}`}>
                                    <button className='bg-zinc-900 text-white h-8 w-24 rounded-xl hover:bg-zinc-600'>Details</button>
                                </Link>
                                <button onClick={() => deleteTask(task.id)} className='bg-red-600 text-white h-8 w-24 rounded-xl hover:bg-red-400'>Delete</button>
                            </li>
                        ))}
                    </ul>
                        ) : (<p className='mt-4'>No Tasks Available</p>)}
                </div>
            </div>
        </>
    )
}

export default TaskList;