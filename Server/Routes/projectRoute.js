const express = require('express');
const ProjectController = require('./../Controller/projectController')

const router = express.Router()

router.route('/getAllProjects').get(ProjectController.getAllProjects)
router.route('/getProject/:id').get(ProjectController.getProject)
router.route('/AddProject').post(ProjectController.AddProject)



module.exports = router