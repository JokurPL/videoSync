exports.home = (req, res) => {
    res.clearCookie('code');
    res.clearCookie('name');

    res.render('login');
};