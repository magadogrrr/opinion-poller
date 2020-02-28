
exports.logout = (req, res, next) => {
    req.logout();
    res.redirect('/');
};

exports.login = (req, res, next) => {
    res.redirect('/surveys');
}