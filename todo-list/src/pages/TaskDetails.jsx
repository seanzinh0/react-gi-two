import '../App.css'
import {useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Details from "../components/Details.jsx";

const TaskDetails = () => {
    // setup location and navigate to get the data based on where it is
    const location = useLocation()
    const navigate = useNavigate()
    // set the state to that of the task that you selected to see the details
    const task = location.state.task
    // sets the state of the title and description
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    // displays task if it exists and uses task as a dependency
    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task])

    // updates task based off id and maps it accordingly
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
        // when updated takes you back to tasklist
        navigate("/", {replace: true})
    }


    return (
        <>
            <h1 className='text-center text-3xl mt-16'>Task Details</h1>
            <div className='flex justify-center mt-16'>
                {/*pass state as props to the component*/}
                <Details title={title} description={description} setTitle={setTitle} setDescription={setDescription}
                         updateTask={updateTask}/>
            </div>
        </>
    )
}

export default TaskDetails;