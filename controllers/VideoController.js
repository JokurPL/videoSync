const fs = require('fs');
const path = require('path');
const socket = require('socket.io');

exports.video = (req, res) => {
    const range = req.headers.range;
    
    if (!range) {
        res.status(400).send("uwu (400)");  
    }
    
    const videoPath = path.join(__dirname, "..", "public") + "/film1.mp4";
    const videoSize = fs.statSync(videoPath).size;

    const CHUNK_SIZE = 10 ** 6; // 1MB
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(res);
};