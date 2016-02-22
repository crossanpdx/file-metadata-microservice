var path = process.cwd();
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

module.exports = function(app) {

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/html/index.html');
		})
	    .post(upload.single('uploadedfile'), function(request, response, next){  
            response.json({ "file size": request.file.size });
        });
	
};