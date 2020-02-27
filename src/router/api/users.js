const router = require('express').Router();
const Controller = require('../../controller/api/users');


router.get('/', Controller.getUser);


module.exports = router;

