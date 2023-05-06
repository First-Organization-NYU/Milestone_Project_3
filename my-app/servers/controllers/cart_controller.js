const cart = require('express').Router()
const db = require('../../models')
const {Cart} = db
const {Op} = require("sequelize")

// Get All Cart Items
cart.get('/', async(req, res) => {
    try {
        const foundCartItems = await Cart.findAll({
            attributes: ['barcode', 'name', 'cost']
        })
        res.status(200).json(foundCartItems)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get a Cart Item
cart.get('/cartItem_id', async(req,res) => {
    try{
        const foundCartItem = await Cart.findOne(
            {
                where: {cartItem_id: req.params.barcode}
            })
            console.log(foundCartItem.dataValues)
            res.status(200).json(foundCartItem.dataValues)
    }catch(error){
        res.status(500).json(error)
    }
})

// Create a Cart Item
cart.post('/', async(req,res) => {
    try{
        // const { barcode, name, brand, price, image } = req.body;
        // const newCartItem = await Cart.create({
        //   barcode,
        //   name,
        //   brand,
        //   price,
        //   image,
        // });

        // const newCartItem = await Cart.create(req.body)
        const newCartItem = await Cart.create(req.body)
        console.log(req.body)
        res.status(200).json({
            message: `Successfully added ${newCartItem} to your cart.`,
            data: newCartItem
        })
    }catch(error){
        res.status(500).json(error)
        console.log(error)
    }
})


// Edit A Cart Item



// Delete a Cart Item 
cart.delete('/:cartItem_id', async(req,res) => {
    try{
        const deletedCartItem = await Cart.destory({
            where: {
                cartItem_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedCartItem} from your cart.`
        })
    }catch(error){
        res.status(500).json(error)
    }
})

module.exports = cart