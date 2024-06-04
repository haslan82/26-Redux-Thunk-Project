import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Cart from './pages/Cart'

function App() {
 

  return (
 

    <BrowserRouter>
    
    <Header />
    <Routes>

<Route path= "/" element={<Main />}/>
<Route path= "/cart" element={<Cart />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
