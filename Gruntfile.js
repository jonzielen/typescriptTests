module.exports = function(grunt) {

    grunt.initConfig({
        typescript: {
            base: {
                src: ['typescriptTests/src/*.ts'],
                dest: 'typescriptTests/min',
                options: {
                    module: 'amd', //or commonjs
                    target: 'es5', //or es3
                    sourceMap: true,
                    declaration: true
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'typescriptTests/src/*.ts'
                ],
                tasks: ['typescript'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-typescript');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['typescript', 'watch']);

};
