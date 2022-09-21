import React from 'react'
import '../../assets/css/Home.css'
import Header from '../Header/index'
import TodoListApp from '../TodoList/index'
const Home = () => {
    return (
        <div className="home">
            <Header />
            <TodoListApp />
        </div>
    )
}

export default Home
