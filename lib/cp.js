var fs = require('fs');
var path = require('path'); 

var cpDir = require('copy-dir').sync;
var cpFile = require('./copyFile');

function exists(path) {
	return fs.existsSync(path) || path.existsSync(path);  
}

function isFile(path) {
	return exists(path) && fs.statSync(path).isFile();  
}

function isDir(path) {
	return exists(path) && fs.statSync(path).isDirectory();  
}

function cp(src, dst) {
	try {
		if (isFile(src)) {
			cpFile(src, dst);
		} else if (isDir(src)) {
			cpDir(src, dst);
		}
	} catch (e) {
		console.log('cp error', e);
		return e;
	}
}

module.exports = cp;