module.exports = function(grunt){
	// config
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			options : {
				banner: '/*! <%= pkg.name  %> */  ' 
			},
			build:{
				src: 'app/js/<%= pkg.name %>.js' ,
				dest:'app/build/<%= pkg.name %>.min.js'
			}
		},
		stylus: {
		  compile: {
		    files: {
		      'app/css_rsc/style.css': 'app/styl/style.styl' // 1:1 compile
		      //'path/to/another.css': ['path/to/sources/*.styl', 'path/to/more/*.styl'] // compile and concat into single file
		    }
		  }
		},
		watch:{
			options:{
				livereload: true
			},
			stylus:{
				files:'app/styl/**/*.styl',
				tasks:['stylus'],
				options: {
			        livereload: true
			    }
			},
			html:{
				files:'app/*.html',
				options: {
			        livereload: true
			    }
			}
		},
		connect: {
		    server: {
		      options: {
		        port: 9001,
		        base: 'app',
		        livereload: true
		      }
		    }
		  }
	});

	// load the plugin  that provides the "uglify" task
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	// default task
	grunt.registerTask('default',['connect','watch'] );

};