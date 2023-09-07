import './styles/Sell.scss'
// import { HiOutlineClipboardCopy } from 'react-icons/hi'
import CheckboxList from './components/Checkbox'
import { useEffect, useState } from 'react'
import ImageHandler from './components/ImageHandler'
import { Content_number_input, Content_text_input } from './components/Sell_tabs'

// const Drag_feature = ({setdrag}) => {
//   return(
//     <div className='Drag-feature' onDragLeave={()=>setdrag(false)}>
//       <h2>Drop your Images</h2>
//     </div>
//   )
// }



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

  const [files, setfiles] = useState([]);
  const [decodefiles , setdecodefiles] = useState([]);
  
  const submitHandler = () => {
    const promises = files.map((index) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        //creates a new filereader and then uses the reader.readasdataURL, onload it will execute the following function
        reader.onload = () => {
          const base64ImageData = reader.result;
          resolve(base64ImageData);
        };
        reader.readAsDataURL(index);
      });
    });
  
    Promise.all(promises)
      .then((resolved_data) => {
        setdecodefiles(resolved_data); // Update the state with decoded images
      })
      .catch((err) => console.log("Error:", err));
  };

// useEffect(()=> console.log(decodefiles),[decodefiles])

  return (
    <div>
      <div className='title-poster'>
        <div>
          <h1>Upload your Property Details</h1>
          <p>Get the best value for your property in a few steps.</p>
        </div>
        <div>
          <img src="/src/assets/img/For sale-bro.png" alt="For Sale Logo" />
        </div>
      </div>
      <div className='content-box' >
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
          <ImageHandler files={files} setfiles={setfiles} />
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
        <div><button onClick={submitHandler} className='publish-button'>PUBLISH</button></div>
      </div>
    </div>
  )
}

export default Sell