var express= require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var fs = require('fs');
    var videoName = req.query.name;
    var path = './public/assets/'+videoName+'.webm';
    console.log(path);
    var stat = fs.statSync(path);
    var fileSize = stat.size;
    var range = req.headers.range;
    if (range) {
        var parts = range.replace(/bytes=/, "").split("-");
        var start = parseInt(parts[0], 10);
        var end = parts[1] ? parseInt(parts[1], 10) : fileSize-1;
        var chunksize = (end-start)+1;
        var file = fs.createReadStream(path, {start, end});
        var head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
    } else {
        var head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }
        res.writeHead(200, head);
        fs.createReadStream(path).pipe(res);
    }
});
module.exports = router;