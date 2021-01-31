const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
const config = require('../settings.json');

const isAWS = require('../settings.json').isAWS;

const uploadFile = (file, res) => {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: 'eu-central-1'
        });

        const s3 = new aws.S3();
        // const file = fs.readFileSync(path.join(__dirname, "public") + "/film.mp4");
        const params = {
            Bucket: 'uwukino',
            ACL: 'public-read',
            Key: 'movie/film.mp4',
            Body: file,
            Prefix: 'movie'
        }

        s3.upload(params, (err, data) => {
            let pass = true;
            res.send(pass);
        });
    } catch (e) {
        console.log(e);
    }
};

exports.main = (req, res) => {

    if (req.cookies['code'] != 'bcc0823c08f2dc276bb8c7095bac20f7') {
        res.redirect('/');
    }
    else {
        res.render('upload');
    }
};

exports.save = (req, res) => {

    if (isAWS) {
        let file = req.files.video;
        uploadFile(file.data, res);
    }
    else {
        fs.writeFile(path.join(__dirname, '../public/film.mp4'), file.data, (err) => {
            if (err) {
                throw err;
            }
            let pass = true;
            res.send(pass);
        });
    }

};