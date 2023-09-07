import { useState } from 'react';
import { PiUploadSimpleBold } from './PiUploadSimpleBold'; // Import your icon component

function ImageUploader() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle when an image is selected
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedImages.length < 5) {
        setSelectedImages([...selectedImages, selectedFile]);
      } else {
        setErrorMessage('You can only upload up to 5 images.');
      }
    }
  };

  // Function to handle image upload
  const handleUpload = () => {
    if (selectedImages.length > 0) {
      // Here, you can send 'selectedImages' to your backend for processing
      // Make an API call to send the selected images to your server
      // You can use libraries like Axios for making the POST request
      // Example: axios.post('/upload-images', selectedImages);
    } else {
      setErrorMessage('Please select at least one image to upload.');
    }
  };

  return (
    <div className='file-input'>
      <label htmlFor='imageInput'>
        <PiUploadSimpleBold />
        <h2>Upload your images</h2>
      </label>
      <input
        type='file'
        id='imageInput'
        accept='image/*' // Allow only image files to be selected
        onChange={handleImageChange}
        style={{ display: 'none' }} // Hide the input visually
      />
      {selectedImages.length > 0 && (
        <div>
          <p>Selected Images:</p>
          <ul>
            {selectedImages.map((image, index) => (
              <li key={index}>{image.name}</li>
            ))}
          </ul>
          {selectedImages.length < 5 && (
            <button onClick={handleUpload}>Upload</button>
          )}
        </div>
      )}
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
    </div>
  );
}

export default ImageUploader;
