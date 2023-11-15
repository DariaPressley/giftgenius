const { Schema, model } = require('mongoose');

const productSchema = new Schema({
      title: {
        type: String,
        required: true,
        unique: true,
     },
       description: {
        type: String,
        required: true,
        unique: true,
       },
       condition: {
        type: String,
        required: true,
        unique: true,
       },
        category: {
            type: String,
            required: true,
            unique: true, 
        },
        ownerEmail: {
            type: String,
            required: true,
            unique: true, 
        },
        price: {
            type: Number, 
        }
    });
    
     const Product = model('Product', productSchema);
    
     module.exports = Product;
    