module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat:{
			options:{
				separator:'\n\n'
			},
			dist:{
				src:['development/app.js', 'development/js/*.js', 'development/js/**/*.js'],
				dest: 'development/application.js'
			},
			deps:{
				src:[
					'bower_components/angular/angular.min.js',
					'bower_components/angular-ui-router/release/angular-ui-router.min.js',
					'bower_components/angular-breadcrumb/release/angular-breadcrumb.min.js',
					'bower_components/jquery/dist/jquery.min.js',
					'bower_components/bootstrap/dist/js/bootstrap.min.js'
				],
				dest: 'production/js/application_deps.min.js'
			},
			cssDeps:{
				src:[
					'bower_components/bootstrap/dist/css/bootstrap.min.css',
					'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
				],
				dest: 'production/styles/style_deps.min.css'
			}
		},
		uglify:{
			dist:{
				src:['development/application.js'],
				dest:'production/application.min.js'
			}
		},
		copy:{
			main:{
				expand: true,
				src:['development/partials/**'],
				cwd: 'partials/',
				dest: 'production/'
			}
		},
		watch:{
			js:{
				files:['development/js/**/*.js', 'development/app.js', 'development/js/*.js'],
				tasks:['concat:dist']
			},
			html:{
				files:['partials/**'],
				tasks:['copy:main']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('build', ['concat:dist', 'concat:deps', 'concat:cssDeps', 'uglify:dist']);
}
