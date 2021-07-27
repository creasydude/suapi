import express from 'express';
const Router = express.Router()
import UserSchema from '../database/schemas/userSchema.js'

Router.get('/' , async (req,res,next) => {
    res.json(await UserSchema.find())
    
})
Router.get('/:id' , async (req,res,next) => {
    res.json(await UserSchema.find({_id : req.params.id}))
    
})
Router.get('/username/:username' , async (req,res,next) => {
    res.json(await UserSchema.find({username : req.params.username}))
    
})

Router.post('/' , (req,res,next) => {
    const user = new UserSchema({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    });

    user.save()
    .then(data => console.log(data))
    .catch(err => console.log(err))

    res.send(`User ${req.body.username} Successfully Added.`)
})

export default Router;