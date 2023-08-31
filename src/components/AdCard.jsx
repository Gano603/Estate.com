import '../styles/AdCard.scss'
import {TiTick} from 'react-icons/ti'
import {BiBath, BiBed} from 'react-icons/bi'
import {TbRulerMeasure} from 'react-icons/tb'

const Feature = ({feature_name})=>{
  return(
    <span><TiTick />{feature_name}</span>
  )
}

const AdCard = ({ imageUrl, type, price, beds , baths , size , address}) => {
  return (
    <div className="ad-card">
      <div>
        <img src={imageUrl} alt="Apartment" />
      </div>
      <div className="details">
        <h2>{type}</h2>
        <h3>PKR {price}</h3>
        <h5>{address}</h5>
        <hr />
        <div className='ad-options'>
          <div><BiBed title='Bedrooms'/><span>{beds}</span></div>
          <div><BiBath title='Bathrooms'/><span>{baths}</span></div>
          <div><TbRulerMeasure style={{ transform: 'rotate(180deg)' }} title='Size'/><span>{size}</span></div>
        </div>
        <hr />
        <div>
        <div className="features">
        <Feature feature_name={"Lawn/Backyard"}/>
        <Feature feature_name={"Roof-terrace"}/>
        <Feature feature_name={"Basement"}/>
        <Feature feature_name={"Garage"}/>
        <Feature feature_name={"Water"}/>
        <Feature feature_name={"Gas"}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AdCard