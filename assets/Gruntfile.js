module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),


	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/main.js'
			],
			dest: '../markup/js/main.min.js'
		}
	},
	

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/main.min.js': ['dist/js/main.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/catalog-category.min.js': ['dist/js/catalog-category.js'],
				'../markup/js/catalog-products.min.js': ['dist/js/catalog-products.js'],
				'../markup/js/catalog.min.js': ['dist/js/catalog.js'],
				'../markup/js/news.min.js': ['dist/js/news.js'],
				'../markup/js/portfolio.min.js': ['dist/js/portfolio.js'],
				'../markup/js/service-page.min.js': ['dist/js/service-page.js'],
				'../markup/js/team.min.js': ['dist/js/team.js'],
				
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/**/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '**/*.html',
			tasks: ['htmlbuild']
		},

		styles: {
			files: ['**/*.css'],
			tasks: ['autoprefixer']
		}
	},

	autoprefixer: {
		dist: {
			files: {
				'build/style.css': 'style.css'
			}
		}
	},
	
		
	

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
					templates: '<%= fixturesPath %>/*.html',
					layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						footer: '<%= fixturesPath %>/templates/footer.html',
						popup: '<%= fixturesPath %>/templates/popup.html'
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');
grunt.loadNpmTasks('grunt-autoprefixer');



// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'htmlbuild', 'watch', 'sass']);



};
