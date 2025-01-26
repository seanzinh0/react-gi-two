import {useState} from 'react'

function Counter() {
    // set state to 0 for count
    const [count, setCount] = useState(0)

    // add onClick event that increments and decrements count
    return (
        <>
            <div className="flex flex-col min-h-screen justify-center gap-3">
                <h1 className="text-4xl text-white flex justify-center">The Count is {count}</h1>
                <div className="flex justify-center items-center gap-2.5">
                    <button className="text-2xl text-white w-24 h-12 border-green-500 bg-green-500 rounded cursor-pointer hover:bg-green-800 hover:border-green-800" onClick={() => setCount((count) => count + 1)}>+</button>
                    <button className="text-2xl text-white w-24 h-12 border-red-600 bg-red-600 rounded cursor-pointer hover:bg-red-800 hover:border-red-800" onClick={() => setCount((count) => count - 1)}>-</button>
                </div>
            </div>
        </>
    )
}

export default Counter