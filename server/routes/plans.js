const router = require('express').Router()
let Plan = require('../models/plan')
let Resource = require('../models/resource')

//get all plans
router.route('/').get((req, res) => {
    Plan.find()
        .then(plans => res.json(plans))
        .catch(err => res.status(400).json('Error: ' + err))
})

//add new plan
router.route('/').post((req, res) => {
    const username = req.body.username
    const testType = req.body.testType
    const testDate = Date.parse(req.body.testDate)
    const timePerWeek = Number(req.body.timePerWeek)
    const resourceName = req.body.resourceName

    const newPlan = new Plan({
        username,
        testType,
        testDate,
        timePerWeek,
        resourceName
    })

    newPlan.save()
        .then(() => res.json('Plan added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

//get specific plan
router.route('/:name/:resource').get((req, res) => {
    Plan.findOne({resourceName: req.params.resource, username: req.params.name},(err, course) => {
        res.json(course)
    })
        .then(plan => res.json(plan))
        .catch(err => {
            return res.status(400).json('Error: ' + err)
        })
})

//delete plan
router.route('/:name/:resource').delete((req, res) => {
    Plan.findOne({resourceName: req.params.resource, username: req.params.name},(err, course) => {
        res.json(course)
    })
        .then(() => res.json('Plan Deleted.'))
        .catch(err => {
            return res.status(400).json('Error: ' + err)
        })
})

//update plan
router.route('/:name/:resource').post((req, res) => {
    Plan.findOne({resourceName: req.params.resource, username: req.params.name},(err, course) => {
        res.json(course)
    })
        .then(plan => {
            plan.username = req.body.username
            plan.testType = req.body.testType
            plan.testDate = Date.parse(req.body.testDate)
            plan.timePerWeek = Number(req.body.timePerWeek)
            plan.resourceName = req.body.resourceName

            plan.save()
                .then(() => res.json('Plan updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => {
            return res.status(400).json('Error: ' + err)
        })
})

module.exports = router
