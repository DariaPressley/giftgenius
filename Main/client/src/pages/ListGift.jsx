import React, { useState } from 'react';
import './ListGift.css'; 
import { useContext } from 'react';
import { CREATE_PRODUCT } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Products from './Products';


const ListGift = () => {
  const [title, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [image, setImage] = useState(null);
  const [addProduct, {error}] = useMutation(CREATE_PRODUCT)

  const handleItemNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleOwnerEmailChange = (e) => {
    setOwnerEmail(e.target.value);
  };


  const handleImageChange = (e) => {
    e.preventDefault ();

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


  //send new product to database using the mutation - set three items to object and send object to database
 //upload button is running handle submit and reloading the page 
 
 const handleSubmit = async (e) => {
    e.preventDefault();
    console.log ('i made it')
    
      const {data} = await addProduct ({
        variables: { 
          title: title,
          ownerEmail: ownerEmail,  
          description: description,
          price: price,
          image: image},
      });

    setItemName('');
    setDescription('');
    setPrice('');
    setImage(null);
    setOwnerEmail ('');
  }


  return (
    <div className="container">
      <h2>List Your Gift</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Gift Name:
          <input type="text" value={title} onChange={handleItemNameChange} />
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
          Email:
          <input type="text" value={ownerEmail} onChange={handleOwnerEmailChange} />
        </label>
        <label>
          Upload Image:
          <button id="upload_widget" className="cloudinary-button" onClick= {handleImageChange}>Upload Gift</button>
          <button className="submitButton" onClick= {handleSubmit}>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default ListGift;