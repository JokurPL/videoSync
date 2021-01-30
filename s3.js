const aws = require('aws-sdk');
const config = require('./aws/config.json');
const fs = require('fs');
const path = require('path');

const uploadFile = (file) => { 
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: 'eu-central-1'
        });

        const s3 = new aws.S3();
        const file = fs.readFileSync(path.join(__dirname, "public") + "/film.mp4");
        const params = {
            Bucket: 'uwukino',
            ACL: 'public-read',
            Key: 'movie/film.mp4',
            Body: file,
            Prefix: 'movie'
        }
            

        s3.upload(params, (err, data) => {
            console.log(err, data);
        });   
    } catch (e) {
        console.log(e);
    }
};