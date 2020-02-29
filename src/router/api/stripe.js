const router = require('express').Router();
const Controller = require('../../controller/api/stripe');
const requireAuth = require('../../middleware/requireAuth');


router.post('/', requireAuth, Controller.purchaseCredits);


module.exports = router;

