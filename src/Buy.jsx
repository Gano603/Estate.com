import SearchBar from './components/SearchBar'
import {Option_button} from './components/Display'
import AdCard from './components/AdCard'
import './styles/Buy.scss'
import { useParams } from 'react-router-dom'
import { FaFilter } from 'react-icons/fa'

const AdDisplay = () => {

  const {location} = useParams();
  

  // const filtertoggle = ()=>{

  // }

  return (
    <>
      <SearchBar address={location} class_name={"Display-searchbar"}/>
      <div className="top-poster"></div>
      <div className='display'>
      <h1>Properties for Sale in {location}</h1>
      <div className='responsive-on-700px filter-button'>
          <button className="option-button" onClick={"#"}><FaFilter /><span>Filters</span></button>
        </div>
      <div className='responsive-off-700px'>
        <Option_button title={"Residential Properties"}/>
        <Option_button title={"Commercial Properties"}/>
        <Option_button title={"Plots"}/>
        <hr />
      </div>
      <div className='responsive-off-700px'>
      <Option_button title={"Purchase"} />
      <Option_button title={"Rental"}/>
      </div>
      <hr />
      <AdCard imageUrl={'/src/assets/img/home4.jpg'} type={"APARTMENT"} price={"2.4mil"} beds={'2'} baths={"4"} size={"teri soch se baahir"} address={"Tera ghar"}/>
      </div>
      <div className='loadmore_option'>
      <Option_button title={"Load More"}/>
      </div>
    </>
  )
}

export default AdDisplay