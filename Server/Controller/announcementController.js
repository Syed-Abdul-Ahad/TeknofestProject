const customError = require('../utils/customError')
const Feedback = require('./../Model/feedbackModel')
const asyncErrorHandler = require('./../utils/asyncErrorHandler')
const util = require('util')
const env = require('dotenv')
const Announcement = require('../Model/announcementModel')
env.config({path:'./config.env'})


exports.addAnnouncement = asyncErrorHandler(async (req,res,next)=>{

   const announcement= await Announcement.create(req.body);

    res.status(201).json({
        status:"success",
        data:{
            announcement
        }
    })
})

exports.getAllAnnouncement = asyncErrorHandler(async (req,res,next)=>{

    const announcement= await Announcement.find();

        res.status(200).json({
        status:"success",
        data:{
            data: announcement
        }
    })
})


exports.getAnnouncement = asyncErrorHandler(async (req,res,next)=>{

    const announcement= await Announcement.findById({_id: req.params.id});

    if(!announcement){
        const err= new customError("Announcement not found.", 404);
        return next(err);
    }
    res.status(200).json({
        status:"success",
        data:{
            data: announcement
        }
    })
})