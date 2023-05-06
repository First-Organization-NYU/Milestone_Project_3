const router = require('express').Router()
const db = require("../../models")
const bcrypt = require('bcrypt')


const { User } = db

router.post('/', async (req, res) => {
    
        hashed_pw= await bcrypt.hash(req.body.password, 10)
        const newUser = { first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email , password_digest: `${hashed_pw}`}
        const user = await User.create( newUser )
        res.json(user)
 
})

    

// router.post('/', async (req, res) => {
//     // let { password, ...rest } = req.body;
//     const user = await User.create(req.body)
//         // ...rest,
//         // password_digest: await bcrypt.hash(password, 10)
//     // })
//     res.json(user)
//     res.send(xman)
// })


router.get('/', async (req, res) => {
    const user = await User.findAll()
    res.json(user)
})

module.exports = router