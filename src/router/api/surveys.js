const router = require('express').Router();
const Controller = require('../../controller/api/surveys');


router.get('/', Controller.getUserSurveys);

module.exports = router;