exports.watch = (req, res) => {
    res.render('movie');
};

exports.cda = (req, res) => {

    res.render('cda', {
        video: req.params.videoId
    })
};