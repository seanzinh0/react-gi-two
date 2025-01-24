import '../App.css'
import {useState, useEffect} from "react";
import TaskForm from "../components/TaskForm.jsx";
import Tasks from "../components/Tasks.jsx";

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setID] = useState(1);

    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        const storedID = localStorage.getItem("id")
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
        if (storedID) {
            setID(JSON.parse(storedID));
        }
    }, []);

    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            id: id
        }
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        setTitle("");
        setDescription("");
        const newID = id + 1;
        setID(newID);
        localStorage.setItem("id", JSON.stringify(newID));
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