import './styles/Home.scss'
import Card from './components/Card'
import {Toaster} from 'react-hot-toast';
import SearchBar from './components/SearchBar'


const Home = () => {
  return (
    <>
    <Toaster />
    <div className='back-poster'></div>
    <SearchBar class_name={"Home-searchbar"}/>
    <div className='bottom-design'>
      <div className='circle1'></div> 
      <div className='circle2'></div> 
    <div className='options'>
      <Card title={"Sell Property"} imageUrl={"src/assets/img/For sale-bro.png"} target="/sell"/>
      <Card title={"Buy Property"} imageUrl={"src/assets/img/House searching-cuate.png"} target="/buy"/>
      <Card title={"Rent"} imageUrl={"src/assets/img/Apartment rent-bro.png"} target="/rent"/>
    </div>
    </div>
    </>
  )
}

export default Home