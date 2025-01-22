import '../App.css'
import {useState, useEffect} from "react";
import TaskForm from "../components/TaskForm.jsx";
import Tasks from "../components/Tasks.jsx";

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
        setTitle("");
        setDescription("");
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
                    <TaskForm createTask={createTask} setTitle={setTitle} setDescription={setDescription} title={title} description={description} />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl text-center'>Tasks</h1>
                    {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask}/>) : (<p className='mt-4'>No Tasks Available</p>)}
                </div>
            </div>
        </>
    )
}

export default TaskList;