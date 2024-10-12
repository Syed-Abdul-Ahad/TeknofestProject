const env = require('dotenv')
env.config({path:'./config.env'})

const mongoose =  require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')



mongoose.connect(process.env.CONN_STRING)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });



//name, email, password, confirm password, photo
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter your name']        
    },
    email:{
        type:String,
        required:[true,'email field is required'],
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'please enter a valid email']
    },
    photo:String,

    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    
    password:{
        type:String,
        required:[true,'please enter a password'],
        minlength:8,
        select: false
    },
    confirmPassword:{
        type:String,
        required:[true,'please confirm your password'],
        validate:{
            validator:function(val){
                return val == this.password
            },
            message:'password and confirm password does not match'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpires: Date,
},{
    collection: 'TeknoFestUsers' 
  })


userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       return next();
    }

    //ecrypting before saving it 
    this.password = await bcrypt.hash(this.password, 12)
    this.confirmPassword = undefined 

    next()
})



userSchema.methods.comparePasswordInDB = async function(password,passwordDB){
    return await bcrypt.compare(password,passwordDB);
}

userSchema.methods.isPasswordChanged = async function(jwtTimeStamp){
    if(this.passwordChangedAt){
        const passwordChangedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000,10)

        return jwtTimeStamp < passwordChangedTimeStamp
    }
    return false
}


userSchema.methods.createResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(32,this.toString('hex'));
    this.passwordResetToken =  crypto.createHash('sha256').update(resetToken).digest('hex')
    this.passwordResetTokenExpires = Date.now() + (10*60+1000);

    return resetToken;
}




const User = mongoose.model('User',userSchema)

module.exports = User;