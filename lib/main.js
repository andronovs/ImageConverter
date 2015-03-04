
// 1.1 convert source Png images to Jpg images 
var imageParams = {
	sourceDir: "source-folder-name-with-PNG-files-1", 
	targetDir: "target-folder-name-with-JPG-files-1", 
	sourceExt: ".png", 
	targetExt: ".jpg", 
	conversionParams: {quality: 30}
};

require('./dirConverter')(imageParams); 

// 1.2 convert source Png images to Jpg thumbnail images 
var thumbImageParams = {
	sourceDir: "source-folder-name-with-PNG-files-1", 
	targetDir: "target-folder-name-with-JPG-files-2", 
	sourceExt: ".png", 
	targetExt: ".jpg", 
	conversionParams: {quality: 30, width: 50} 
};

require('./dirConverter')(thumbImageParams); 
