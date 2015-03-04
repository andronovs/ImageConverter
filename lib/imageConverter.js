var easyimg = require('easyimage');

function convertPng2Jpg(sourceFileName, targetFileName, conversionParams)
{
	var convParams = {src: sourceFileName, dst: targetFileName}; 

	// copy all additional parameters to the target image conversion params JSON object 
	if (conversionParams) {
		for (var key in conversionParams) {
		  if (conversionParams.hasOwnProperty(key)) { 
		    convParams[key] = conversionParams[key]; 
		  }
		}
	}

	easyimg.convert(convParams, 
	    function(err, stdout) { 
	      if(stdout) { console.log('stdout', stdout); }
	    }
	);
}

exports.convertPng2Jpg = convertPng2Jpg; 

