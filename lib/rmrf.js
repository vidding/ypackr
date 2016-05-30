var fs = require('fs');
var path = require('path');

var misc = require('./misc');
var exists = misc.exists;
var isFile = misc.isFile;
var isDir = misc.isDir;

function rmrf(path) {
	try {
		if (isDir(path)) {
			var list = fs.readdirSync(path);
			
			if (!list || list.length === 0) {
				list = [];
			}

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
