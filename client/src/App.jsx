import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCreate from './components/game-create/GameCreate'
import Catalog from './components/catalog/Catalog'

function App() {

    return (
        <>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/games/create" element={<GameCreate/>} />
                        <Route path="/games" element={<Catalog/>} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
