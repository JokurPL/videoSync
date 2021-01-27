const md5 = require('md5');

exports.login = (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    
    res.cookie("code", md5(password), { maxAge: 18000000 });
    res.cookie("name", name, { maxAge: 18000000 });
    
    res.redirect('/watch');
};