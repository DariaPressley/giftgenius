import React, { useState } from 'react';
import './ListGift.css'; 
import { useContext } from 'react';

const ListGift = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleImageChange = (e) => {

    var myWidget = cloudinary.createUploadWidget({
      cloudName: 'dwymtagmc', 
      uploadPreset: 'tjj6snc6'}, (error, result) => { 
        if (!error && result && result.event === "success") { 
          console.log('Done! Here is the image info: ', result.info); 
          setImage(result.info.url);
        }
      }
    )
    
    document.getElementById("upload_widget").addEventListener("click", function(){
        myWidget.open();
      }, false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setItemName('');
    setDescription('');
    setPrice('');
    setImage(null);
  };



  return (
    <div className="container">
      <h2>List Your Gift</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gift Name:
          <input type="text" value={itemName} onChange={handleItemNameChange} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Price:
          <input type="text" value={price} onChange={handlePriceChange} />
        </label>
        <label>
          Upload Image:
          <button id="upload_widget" className="cloudinary-button" onClick= {handleImageChange}>Upload Gift</button>
        </label>
      </form>
    </div>
  );
};

export default ListGift;