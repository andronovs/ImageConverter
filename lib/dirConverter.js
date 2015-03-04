var fs = require('fs'); 
var f = require('file');  
var ic = require('./imageConverter');

module.exports = function(imageParams) {

	var sourceDir = imageParams.sourceDir; 
	var targetDir = imageParams.targetDir; 
	var sourceExt = imageParams.sourceExt; 
	var targetExt = imageParams.targetExt; 
	var conversionParams = imageParams.conversionParams; 

	ProcessDir(sourceDir); 

	function ProcessDir(sourceDirName) {

		f.walkSync(sourceDirName, function(start, childDirNames, dirNameFiles) { 
			ProcessFilesSync(start, dirNameFiles); 
		}); 
	}

	function ProcessFilesSync(sourceDirName, sourceDirFileNames) {

		// create the target dir first 
		var targetDirName = sourceDirName.replace(sourceDir, targetDir); 
		fs.mkdir(targetDirName, function(err) {
		  //if (err) throw new Error(err); 
		}); 

		for(var index=0; index < sourceDirFileNames.length; index++) {
			var sourceFileName = f.path.join(sourceDirName, sourceDirFileNames[index]); 

			var targetFileName = sourceDirFileNames[index].replace(sourceExt, targetExt); 
			targetFileName = f.path.join(targetDirName, targetFileName); 

			//copyFile(sourceFileName, targetFileName); 
			ic.convertPng2Jpg(sourceFileName, targetFileName, conversionParams); 
		}
	}

	// Not in use. 
	function copyFile(sourceFileName, targetFileName) {
		fs.createReadStream(sourceFileName).pipe(fs.createWriteStream(targetFileName));
	}

}; 

