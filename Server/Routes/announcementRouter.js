const express=require("express");
const announcementController = require('../Controller/announcementController')
const authController = require('../Controller/authController')


const router= express.Router();

router.route('/').post(authController.protect,announcementController.addAnnouncement).get(announcementController.getAllAnnouncement)
router.route('/:id').get(announcementController.getAnnouncement)

module.exports= router;