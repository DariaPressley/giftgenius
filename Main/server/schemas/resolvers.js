const { Product, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require("stripe")("sk_test_51OEbylLFoJobiVodDUoni1AFDxHyab2ZURXeguApjxgxd1AL6twV28Y3uXFCr2nCLCM8uE6tLl4q43mSdVQoIaX400mBTeP9Cd");
const { v4: uuidv4 } = require('uuid');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

        return userData;
      }

      throw AuthenticationError;
    },
    products: async () => {
      return Product.find({})
    },
    users: async () => {
      return await User.find({})
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    loginUser: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // log what user is...
      console.log('user is', user);
      
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addProduct: async (parent, { productData }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { productData } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
    removeProduct: async (parent, { productId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { productId } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },

  Query: {
    getMessage: () => 'It works',
  },
  Mutation: {
    makePayment: async (_, { token, amount }, { req, res }) => {
      try {
        console.log(token);
        const { email, source } = token;
        const idempotencyKey = uuidv4();

        const customer = await stripe.customers.create({
          email,
          source,
        });

        const charge = await stripe.charges.create(
          {
            amount: amount * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: email,
          },
          { idempotencyKey }
        );

        return { success: true, message: 'Payment successful' };
      } catch (error) {
        console.error(error);
        return { success: false, message: 'Payment failed' };
      }
    },
  }
};

module.exports = resolvers;

