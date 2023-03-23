import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home/Home'
import Post from './pages/Post/Post'
import Users from './pages/Users/Users'
import User from './pages/User/User'
import { SkeletonTheme } from 'react-loading-skeleton'

function App() {
  return (
    <SkeletonTheme baseColor='#9d9dde' highlightColor='#bfbeff'>
      <AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/post/:id' element={ <Post /> } />
            <Route path='/users' element={ <Users /> } />
            <Route path='/user/:id' element={ <User /> } />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </SkeletonTheme>
  );
}

export default App;
