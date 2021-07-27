import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Users = new Schema({
 
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    }
  });
  
 
const UserSchema = mongoose.model("Users", Users);
  

export default UserSchema;