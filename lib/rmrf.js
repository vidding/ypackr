var fs = require('fs');
var path = require('path');

function exists(path) {
	return fs.existsSync(path) || path.existsSync(path);  
}

function isFile(path) {
	return exists(path) && fs.statSync(path).isFile();  
}

function isDir(path) {
	return exists(path) && fs.statSync(path).isDirectory();  
}

function rmrf(path) {
	try {
		if (isDir(path)) {
			fs.readdirSync(path).forEach(function (file, index) {
				var curPath = path + '/' + file;

				if (fs.lstatSync(curPath).isDirectory()) {
					 // recurse
					rmrf(curPath);
				} else {
					// delete file
					fs.unlinkSync(curPath);
				}
			});
			
			fs.rmdirSync(path);
		} else if (isFile(path)) {
			// delete file
			fs.unlinkSync(path);
		}
	} catch (e) {
		return e;
	}
}

module.exports = rmrf;
