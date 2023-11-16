const bcrypt = require('bcryptjs');
const mongoose = require('./DB');
const User = require('../models/User');
const Product = require('../models/Product');
const userSeedData = require('./user.json').user;
const productSeedData = require('./product.json').product;

async function seedDB() {
  await mongoose.connection.dropDatabase();

  // Seed Users with hashed passwords
  for (const userData of userSeedData) {
    const hashedPassword = await bcrypt.hash(userData.password, 12);
    const user = new User({
      ...userData,
      password: hashedPassword
    });
    await user.save();
  }

  // Seed Products
  for (const productData of productSeedData) {
    const owner = await User.findOne({ email: productData.ownerEmail });
    if (owner) {
      const product = new Product({ ...productData, owner: owner._id });
      await product.save();
    } else {
      console.error(`User with email ${productData.ownerEmail} not found.`);
    }
  }

  console.log('Database seeded!');
  mongoose.connection.close();
}

seedDB().catch(error => {
  console.error('Seeding failed:', error);
  mongoose.connection.close();
});
