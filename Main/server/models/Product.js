const { Schema, model } = require('mongoose');

const productSchema = new Schema({
      title: {
        type: String,
     },
       description: {
        type: String,
       },
       condition: {
        type: String,
       },
        category: {
            type: String,
        },
        ownerEmail: {
            type: String,
        },
        price: {
            type: Number, 
        },
        image: {
            type: String,
        },
        userId: {
            type: Schema.Types.ObjectId, 
            ref: "User"
        }
    });
    
     const Product = model('Product', productSchema);
    
     module.exports = Product;
    