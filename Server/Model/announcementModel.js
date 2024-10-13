const env = require('dotenv')
env.config({path:'./config.env'})

const mongoose =  require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.CONN_STRING)
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });

  const announcementSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Please enter title']        
    },
    salutation:{
        type: String
    },
    body:{
        type:String,
        required:[true,'Enter body of the announcement'],
    },
    date:{
        type: Date,
        required: [true, "Please enter date"],
    },
    img:{
        type: String
    },
    category:{
        type:String,
        enum:['General','Competition'],
        default:'General',
    },
    
},{
    collection: 'TeknoFestAnnouncement' 
  })


const Announcement = mongoose.model('Announcement',announcementSchema)

module.exports = Announcement;