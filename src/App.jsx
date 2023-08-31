import { Route , Routes , BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Navbar from './components/Navbar'
import AdDisplay from './Buy'
import Invest from './Invest'
import Sell from './Sell'
import './styles/App.scss'
import Footer from './components/Footer'
import Signin from './Signup'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path={"/"} element={<Home />}/>
      <Route path={"/display/:location"} element={<AdDisplay />}/>
      {/* <Route path={"/invest/:location"} element={<Invest />}/> */}
      <Route path={"/sell"} element={<Sell />}/>
      <Route path={"/signin"} element={<Signin />}/>
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
