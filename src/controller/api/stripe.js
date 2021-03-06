const keys = require('../../../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);


module.exports.purchaseCredits = async (req, res, next) => {
    try {
        const charge = await stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        });
        
        req.user.credits += 5;
        const user = await req.user.save();

        res.send(user);

    } catch(err) {
        res.status(500).send({error: 'server error'});
    }   
};
