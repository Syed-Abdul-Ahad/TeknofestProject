const env = require('dotenv')
env.config({path:'./config.env'})

const mongoose =  require('mongoose')
mongoose.connect(process.env.CONN_STRING,{
    useNewUrlParser:true
})
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(process.env.CONN_STRING)
    console.error("DB connection error:", err);
  });


const ProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter CompetitionName']        
    },

    photo:String,

    dateHeld: Date,
    totalParticipants:Number,
    newKey:{
        type: Boolean
    },
    participationPrice:Number,
    description:String,
    category: String,
},{
    collection: 'TeknoFestProject' 
  })

const Project = mongoose.model('Project',ProjectSchema)

module.exports = Project;





