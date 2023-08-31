import {GrLocation} from 'react-icons/gr'
import '../styles/DisplayCard.scss'

const DisplayCard = ({imgUrl , Price , Location}) => {
  return (
    <div className='display-card'>
        <img src={imgUrl} />
        <h2>PKR {Price}</h2>
        <div><GrLocation /><span>{Location}</span></div>
    </div>
  )
}

export default DisplayCard