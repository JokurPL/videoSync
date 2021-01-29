const fs = require('fs');
const path = require('path');

exports.main = (req, res) => {

    if (req.cookies['code'] != 'bcc0823c08f2dc276bb8c7095bac20f7') {
        res.redirect('/');
    }
    else {
        res.render('upload');
    }
};

exports.save = (req, res) => {
    let file = req.files.video;

    fs.writeFile(path.join(__dirname, '../public/film.mp4'), file.data, (err) => {
        if (err) {
            throw err;
        }
        let pass = true;
        res.send(pass);
    });
};