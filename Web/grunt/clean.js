//------------------------------------------------------
// Company: Valentys Ltda.
// Author: dmunozgaete@gmail.com
// 
// Description: Clean a folder, (dist folder for example)
// 
// URL: https://www.npmjs.com/package/grunt-contrib-clean
// 
//------------------------------------------------------
module.exports = function(grunt, options) {

	return {
		dist: [
			'app/dist/**/*.*'
		],

		post: [
			'app/dist/js/bundles.js',
			'app/dist/js/controllers.js'
		]
	};

};