import { Outlet, Link } from "react-router-dom";
import '../App.css'

const Layout = () => {
    return (
        <>
            <nav className="min-w-full min-h-20 flex justify-center items-center border-b-4 border-black bg-white">
                <ul className="flex flex-row justify-between gap-3.5">
                    <li className='font-bold text-3xl'>
                        <Link to="/">Task List</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
};

export default Layout;