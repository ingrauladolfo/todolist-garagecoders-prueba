import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Addtask from '../Task/AddTask'
import Todolist from '../TodoList/TodoList'
import Updatetask from '../Task/UpdateTask'
const TodoListApp = () => {
    const [todolist, setTodolist] = useState([])
    const [tasktoUpdate, setTasktoUpdate] = useState({})
    const [showPopup, setShowPopup] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/tasks').then(res => {
            setTodolist(res.data)
        }).catch(err => console.log(err))
    }, [])
    const addTask = newTask => {
        setTodolist([...todolist, newTask])
    }
    const taskComplete = task => {
        const newList = [...todolist]
        newList.forEach(item => {
            if (item._id === task._id) {
                item.isComplete = task.isComplete
            }
        })
        setTodolist(newList)
    }
    const removeTask = task => {
        const newList = todolist.filter(item => !(item._id === task._id))
        setTodolist(newList)
    }
    const updatetask = task => {
        const newList = [...todolist]
        newList.forEach(item => {
            if (item._id === task._id) {
                item.todo = task.todo
            }
        })
        setTodolist(newList)
    }
    return (
        <div>
            <Addtask addTask={addTask} />
            <Todolist todolist={todolist} taskComplete={taskComplete} removeTask={removeTask} tasktoUpdate={task => setTasktoUpdate(task)} showPopup={() => setShowPopup(!showPopup)} />
            {showPopup && <Updatetask task={tasktoUpdate} updatetask={updatetask} removePopup={() => setShowPopup(!showPopup)} />}
        </div>
    );
}

export default TodoListApp;
