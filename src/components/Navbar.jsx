import '../styles/Navbar.scss'
import AdDisplay from '../Buy'
import Sell from '../Sell.jsx'
import { Link , useNavigate} from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import Menu_display from './Menu_display'

const Navbar = () => {

  const nav = useNavigate();
  const [MenuisOpen , setMenuisOpen] = useState(false);

  const menu_open = ()=>{
    if(MenuisOpen) setMenuisOpen(false);
    else setMenuisOpen(true);
  }

  return (
    <>
    <div className='navbar'>
        <div className='title-box' onClick={()=>nav('/')}>
            <img className='title-image' src="/src/assets/img/icon.webp" alt="logo" />
            <h2><span className='text-red'>Estate</span>.com</h2>
        </div>
        <div className='menu_nav'>
        <div className='responsive-off-700px'>
            <Link to={"/display/all"} element={<AdDisplay />}>BUY</Link>
            <Link to={"/sell"} element={<Sell />}>SELL</Link>
            <Link to={"/display/all"} element={<AdDisplay />}>RENT</Link>
        </div>
        </div>
        <div>
            <button className='responsive-off-700px' onClick={()=>nav('/signin')}>SIGN IN</button>
            <AiOutlineMenu onClick={menu_open} className='menu-icon responsive-on-700px'/>
        </div>
    </div>
    {MenuisOpen && <Menu_display />}
    </>
  )
}

export default Navbar