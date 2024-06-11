const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName : {type: String, required : true},
    lastName : {type : String, required : true},
    mobileNo : {
        type : String,
        required : true,
        validate : {
            validator : function (v)  {
                return /^\d{10}$/.test(v)
            },

            message: props => `${props.value} is not a valid 10 digit number!`

            
        }
    },
    email : {
        type : String,
        required : true,
        match : [/^\S+@\S+\.\S+$/, 'is invalid']
    }, 
    address : {
        Street : String, 
        city : String,
        state : String,
        country : String
        
    },
    loginId : {
        type : String,
        required : true,
        minlength : 8,
        match :[/^[a-zA-Z0-9]+$/, 'is Invalid']

    },
    password : {
        type : String, 
        required : true,
        minlength : true,
        validate: {
            validator: function(v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/.test(v);
            },
            message: props => `Password must contain 1 uppercase letter, 1 lowercase letter, and 1 special character`
        }
    },

    creationTime : {type : Date, default : Date.now},
    lastUpdated : {type : Date, default : Date.now}


})

const User = mongoose.model('User', userSchema)

module.exports = User