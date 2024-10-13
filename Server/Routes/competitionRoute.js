const express = require('express');
const authController = require('./../Controller/authController')
const CompetitionController = require('./../Controller/competitionController')

const router = express.Router()

router.route('/getAllCompetitions').get(CompetitionController.getAllCompetitions)
router.route('/getCompetition/:id').get(CompetitionController.getCompetition)
router.route('/AddCompetition').post(CompetitionController.AddCompetition)



module.exports = router