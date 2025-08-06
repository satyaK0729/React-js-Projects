import './App.css'
import MovieCard from './components/MovieCard'
// import { Route,Routes } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Favorites from './pages/Favorites.jsx'
import AboutMe from './pages/AboutMe.jsx'

function App() {
  return (
    // <main className='main-content'>
    //   <Routes>
    //     <Route path='/' element={<Home/>}/>
    //     <Route path='/Favorites' element={<Favorites/>}/>
    //     <Route path='/About Me' element={<AboutMe/>}/>
    //   </Routes>
    // </main>

    <Home/>
  );

}


export default App;
