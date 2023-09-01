import './styles/Sell.scss'
import { ImSearch } from 'react-icons/im'
import { PiUploadSimpleBold } from 'react-icons/pi'
import CheckboxList from './components/Checkbox'

const Content_text_input = ({ title, place_title, search, pkr }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='input-div'><ImSearch className={search ? '' : 'off'} /><input type="text" placeholder={place_title} /><span className={pkr ? 'input-pkr' : 'off'}>PKR</span></div>
    </div>
  )
}

const Content_number_input = ({ title, type }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className='input-div'><span className='input-pkr'>{type}</span><input type="number" /></div>
    </div>
  )
}

const Sell = () => {

  const propertyFeatures = [
    'Garage',
    'Lawn/Yard',
    'Gas Supply',
    'Water Supply',
    'Electricity',
    'Kitchen Appliances',
    'Security System',
    'Swimming Pool',
    'Basement',
    'Solar Panels',
    'Smart Home Technology',
  ];

  return (
    <>
      <div className='title-poster'>
        <div>
          <h1>Upload your Property Details</h1>
          <p>Get the best value for your property in a few steps.</p>
        </div>
        <div>
          <img src="/src/assets/img/For sale-bro.png" alt="For Sale Logo" />
        </div>
      </div>
      <div className='content-box'>
        <div>
          <div className='first-col'>
            <div>
              <h2>What kind of property do you have?</h2>
              <div>
                <button>Apartment</button>
                <button>Plot</button>
                <button>House</button>
                <button>Plaza</button>
              </div>
            </div>
            <Content_text_input title={"Which city is your property in?"} place_title={"Select your city"} search={true} />
            <Content_text_input title={"What is the size of your property?"} place_title={"Enter size of your property"} />
            <Content_text_input title={"What is the asking price?"} place_title={"0"} pkr={true} />
            <Content_number_input title={"How many Bedrooms?"} type={"Beds"} />
            <Content_number_input title={"How many Baths?"} type={"Baths"} />
            <div>
              <h2>Upload images of your property</h2>
              <div className='file-input'>
                <PiUploadSimpleBold />
                <h2>Upload your image</h2>
              </div>
            </div>
          </div>
          <div className='second-col'>
            <div className='personal-content-box'>
              <h2>Personal Details</h2>
              <Content_text_input title={"What is your name?"} place_title={"Enter your Name"} />
              <Content_text_input title={"Contact Number"} place_title={"Enter your Contact Number"} />
            </div>
            <div className='feature-selection'>
              <h2>Features</h2>
              <p>Select features that you are offering with your property.</p>
              <CheckboxList options={propertyFeatures} />
            </div>
          </div>
        </div>
        <div><button className='publish-button'>PUBLISH</button></div>
      </div>
    </>
  )
}

export default Sell