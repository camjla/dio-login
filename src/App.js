import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { Feed } from './pages/feed'

import { Home } from './pages/Home'
//import { Login } from './pages/login'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  )
}

export default App
