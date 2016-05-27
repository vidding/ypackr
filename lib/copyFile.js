var fs = require('fs');
var path = require('path');
var mkdirs = require('node-mkdirs');

module.exports = function(sourcePath, destinationPath) {
	var source = fs.readFileSync(sourcePath);

	mkdirs(path.dirname(destinationPath));
	fs.writeFileSync(destinationPath, source);
};