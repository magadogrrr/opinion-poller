
module.exports.getUser = (req, res, next) => {
    res.send(req.user);
};

module.exports.getSession = (req, res, next) => {
    res.send(req.session);
};