const { Schema, model } = require('mongoose');

const productSchema = new Schema({
      title: {
        type: String,
        required: true,
     },
       description: {
        type: String,
        required: true,
       },
       condition: {
        type: String,
        required: true,
       },
        category: {
            type: String,
            required: true,
        },
        ownerEmail: {
            type: String,
            required: true,
        },
        price: {
            type: Number, 
        }
    });
    
     const Product = model('Product', productSchema);
    
     module.exports = Product;
    