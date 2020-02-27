exports.logout = (req, res, next) => {
    req.logout();
    res.send(req.user);
};