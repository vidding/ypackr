var fs = require('fs');
var path = require('path'); 

var cpDir = require('copy-dir').sync;
var cpFile = require('./copyFile');

var misc = require('./misc');
var exists = misc.exists;
var isFile = misc.isFile;
var isDir = misc.isDir;

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