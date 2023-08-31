import { Link } from "react-router-dom"
import AdDisplay from "../Buy"
import Sell from "../Sell"
// import '../styles/Menu_display.scss'


const Menu_display = () => {
  return (
    <div className="vert-menu">
        <Link to={"/display/:location"} element={<AdDisplay />}>BUY</Link>
        <Link to={"/sell"} element={<Sell />}>SELL</Link>
        {/* <Link to={"#"} element={<Rent />}>RENT</Link> */}
        {/* <Link to={"#"} element={<Invest />}>INVEST</Link> */}
    </div>
  )
}

export default Menu_display