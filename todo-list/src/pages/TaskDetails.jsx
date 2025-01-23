import '../App.css'
import {useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Details from "../components/Details.jsx";

const TaskDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const task = location.state.task
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task])

    const updateTask = (e) => {
        e.preventDefault();
        const updatedTask = {
            title,
            description,
            id: task.id
        }

        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = storedTasks.map((t) => t.id === task.id ? updatedTask : t);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        navigate("/", {replace: true})
    }


    return (
        <>
            <h1 className='text-center text-3xl mt-16'>Task Details</h1>
            <div className='flex justify-center mt-16'>
                <Details title={title} description={description} setTitle={setTitle} setDescription={setDescription}
                         updateTask={updateTask}/>
            </div>
        </>
    )
}

export default TaskDetails;