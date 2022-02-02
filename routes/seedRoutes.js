
import express from 'express'
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import data  from '../data.js'

const seedRouter = express.Router();


seedRouter.get('/',async(req,res)=>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    //res.send({createdProducts});
    await User.remove({});
    const createdUser = await User.insertMany(data.users);
    res.send({createdProducts, createdUser});
});

export default seedRouter;