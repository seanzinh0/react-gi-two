import '../App.css'
import {useState, useEffect} from "react";
import TaskForm from "../components/TaskForm.jsx";
import Tasks from "../components/Tasks.jsx";

const TaskList = () => {
    // set state for input fields
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setID] = useState(1);

    // loads tasks and id from localstorage
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

    // create task function that creates task with title, description and id
    const createTask = (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            id: id
        }
        // resets states and increments ID also assigns tasks and id to local storage
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        setTitle("");
        setDescription("");
        const newID = id + 1;
        setID(newID);
        localStorage.setItem("id", JSON.stringify(newID));
    }

    // delete task by filtering out where it doesn't have the same id and storing the new array to the local storage
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
                    {/*pass props to the task form component*/}
                    <TaskForm createTask={createTask} setTitle={setTitle} setDescription={setDescription} title={title} description={description} />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl text-center'>Tasks</h1>
                    {/*checks if theres tasks to display the component or not*/}
                    {tasks.length > 0 ? (<Tasks tasks={tasks} deleteTask={deleteTask}/>) : (<p className='mt-4'>No Tasks Available</p>)}
                </div>
            </div>
        </>
    )
}

export default TaskList;