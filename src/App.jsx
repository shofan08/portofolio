import './App.css'
import './Animate.css'
import Index from './pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './bundle.min.js'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}
