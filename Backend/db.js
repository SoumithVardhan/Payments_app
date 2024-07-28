const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://soumithvardhan06:fGh1hBk0xWhFKgkm@cluster0.adzbasm.mongodb.net/paytm");
// user schema

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

// model creation from schema
const Account = mongoose.model('Account',accountSchema);
const User= mongoose.model('User',userSchema);
module.exports={
    User,
    Account
};
