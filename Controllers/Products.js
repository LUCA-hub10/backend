const Product = require("../Models/Products");

exports.addProduct=async(req,res)=>{
    try{
            const product = new Product(req.body);
            await product.save();
            res.status(200).send({msg:"product added successfully",product});
    }catch(error){
        res.status(500).send({msg:"error on adding product",error})
    }
}

exports.getProducts=async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).send({msg:"products found successsfully",products});
    }catch(error){
        res.status(500).send({msg:"error on getting products",error});
    }
}

exports.getProductById=async(req,res)=>{
    try{
        const {_id} = req.params;
        const product = await Product.findOne({_id:_id});
        res.status(200).send({msg:"product found successfully",product});
    }catch(error){
        res.status(500).send({msg:"error on getting product",error});
    }
}

exports.deleteProduct=async(req,res)=>{
    try{
        const {_id} = req.params;
        await Product.deleteOne({_id})
        const products = await Product.find();
        res.status(200).send({msg:"product deleted successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on deleting product",error});
    }
}

exports.updatePrice=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {price} = req.body;
        const updatedProduct = await Product.updateOne({_id},{$set:{price}});
        const products = await Product.find();
        res.status(200).send({msg:"product's price updated successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on updating product's price",error});
    }
}

exports.updateDiscountPrice=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {discountPrice} = req.body;
        const updatedProduct = await Product.updateOne({_id},{$set:{discountPrice}});
        const products = await Product.find();
        res.status(200).send({msg:"product's DiscountPrice updated successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on updating product's DiscountPrice",error});
    }
}

exports.updateStockQuantity=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {stockQuantity} = req.body;
        const updatedProduct = await Product.updateOne({_id},{$set:{stockQuantity}});
        const products = await Product.find();
        res.status(200).send({msg:"product's StockQuantity updated successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on updating product's StockQuantity",error});
    }
}

exports.updateRatings=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {ratings} = req.body;
        const updatedProduct = await Product.updateOne({_id},{$set:{ratings}});
        const products = await Product.find();
        res.status(200).send({msg:"product's Ratings updated successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on updating product's Ratings",error});
    }
}

exports.updateReviews=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {reviews} = req.body;
        const updatedProduct = await Product.updateOne({_id},{$set:{reviews}});
        const products = await Product.find();
        res.status(200).send({msg:"product's Reviews updated successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on updating product's Reviews",error});
    }
}

exports.addComment=async(req,res)=>{
    try{
        const {_id} =req.params;
        const {comment} =req.body
        const updatedProduct = await Product.updateOne({_id},{$push: {comments: comment}});
        const products = await Product.find();
        res.status(200).send({msg:"product's Comment added successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on adding product's Comment",error})
    }
}

exports.getProductsByClientId=async(req,res)=>{
    try{
        const {clientID} = req.body;
        const products = await Product.find({clientID:clientID});
        res.status(200).send({msg:"products found successfully",products});
    }catch(error){
        res.status(500).send({msg:"error on getting products",error});
    }
}