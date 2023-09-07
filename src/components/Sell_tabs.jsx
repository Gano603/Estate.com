import { ImSearch } from 'react-icons/im'

export const Content_text_input = ({ title, place_title, search, pkr }) => {
    return (
      <div>
        <h2>{title}</h2>
        <div className='input-div'><ImSearch className={search ? '' : 'off'} /><input type="text" placeholder={place_title} /><span className={pkr ? 'input-pkr' : 'off'}>PKR</span></div>
      </div>
    )
  }
  
  export const Content_number_input = ({ title, type }) => {
    return (
      <div>
        <h2>{title}</h2>
        <div className='input-div'><span className='input-pkr'>{type}</span><input type="number" /></div>
      </div>
    )
  }