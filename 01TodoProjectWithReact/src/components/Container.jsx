import React, { useEffect, useState } from 'react'

const Container = () => {
    const [allTasks, setAllTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("allTasks")) || []
    })
    const [taskInput, setTaskInput] = useState("")
    const [isEditing, setIsEditing] = useState(null) // store TaskId if editing

    // Add or Save Edited Task
    const addOrEditTask = () => {
        if (taskInput.trim() === '') {
            alert("Please Enter The Task First")
            return
        }

        if (isEditing) {
            // Edit mode
            setAllTasks(allTasks.map(task =>
                task.TaskId === isEditing ? { ...task, Task: taskInput } : task
            ))
            setIsEditing(null)
        } else {
            // Add mode
            const taskDetails = {
                TaskId: Date.now(),
                Task: taskInput,
                isCompleted: false
            }
            setAllTasks([...allTasks, taskDetails])
        }
        setTaskInput("")
    }

    // Delete Task
    const deleteTask = (taskId) => {
        const confirmed = confirm("Are You Sure?")
        if (confirmed) {
            setAllTasks(allTasks.filter(task => task.TaskId !== taskId))
        } else {
            return
        }
    }

    // Toggle Complete
    const toggleComplete = (taskId) => {
        setAllTasks(allTasks.map(task =>
            task.TaskId === taskId ? { ...task, isCompleted: !task.isCompleted } : task
        ))
    }

    // Edit Task
    const startEditTask = (taskId) => {
        const confirmed = confirm("Are You Sure?")
        if (confirmed) {
            const taskToEdit = allTasks.find(task => task.TaskId === taskId)
            setTaskInput(taskToEdit.Task)
            setIsEditing(taskId)
        } else {
            return
        }
    }

    // Save to localStorage whenever allTasks changes
    useEffect(() => {
        localStorage.setItem("allTasks", JSON.stringify(allTasks))
    }, [allTasks])

    return (
        <div className='Container flex flex-col gap-4 justify-center items-center bg-[#333] text-white w-[40vw] m-auto p-5 mt-[10%] rounded-lg shadow-lg max-w-[1500px] min-w-[500px]'>
            <div className="heading">
                <h1 className='text-4xl text-center animate-bounce'>
                    SIMPLE TODO APP
                </h1>
            </div>

            <div className="inputBox flex flex-row items-center gap-2 px-2">
                <div className="inputSection">
                    <input
                        type="text"
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        placeholder="Enter Task Here"
                        className='text-orange-600 font-semibold px-4 py-2 rounded-lg shadow-lg w-[420px]'
                    />
                </div>
                <div className="button">
                    <button
                        type="button"
                        onClick={addOrEditTask}
                        className='px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg active:bg-red-600 duration-300'
                    >
                        {isEditing ? "Save" : "Add Task"}
                    </button>
                </div>
            </div>

            <div className='allTasks flex flex-col gap-3 px-4'>
                {allTasks.map((task, index) => (
                    <div
                        key={task.TaskId}
                        className='flex flex-row justify-between items-center gap-[100px] mt-[20px] bg-[black] px-5 py-6 rounded-lg shadow-lg'
                    >
                        <div className='flex flex-row items-center gap-2'>
                            <h2 className={`text-2xl ${task.isCompleted ? "line-through text-gray-400" : "text-white"}`}>
                                {index + 1}:
                            </h2>
                            <h2 className={`text-2xl ${task.isCompleted ? "line-through text-gray-400" : "text-white"}`}>
                                {task.Task}
                            </h2>
                        </div>

                        <div className="actionButtons flex flex-row items-center gap-2">
                            <button
                                type="button"
                                onClick={() => startEditTask(task.TaskId)}
                                className='bg-blue-500 text-white text-[16px] px-4 py-2 active:bg-blue-600 duration-300 rounded-lg shadow-lg'
                            >
                                Edit
                            </button>
                            <button
                                type="button"
                                onClick={() => toggleComplete(task.TaskId)}
                                className='bg-green-500 text-white text-[16px] px-4 py-2 active:bg-green-600 duration-300 rounded-lg shadow-lg'
                            >
                                {task.isCompleted ? "Undo" : "Complete"}
                            </button>
                            <button
                                type="button"
                                onClick={() => deleteTask(task.TaskId)}
                                className='bg-red-500 text-white text-[16px] px-4 py-2 active:bg-red-600 duration-300 rounded-lg shadow-lg'
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Container
