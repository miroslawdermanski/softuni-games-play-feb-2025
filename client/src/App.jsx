import { Route, Routes } from 'react-router'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

function App() {

    return (
        <>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        </>
    )
}

export default App
