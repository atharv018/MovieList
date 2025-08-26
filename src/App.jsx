import Home from './Pages/Home'
import {Routes, Route} from "react-router-dom" 
import WatchList from './Pages/WatchList'
import Search from './Pages/Search'
import NavBar from "./components/Navbar"

function App() {
  return(
    <div> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </div>
  )
}

export default App
