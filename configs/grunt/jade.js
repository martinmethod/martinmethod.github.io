var grunt = require('grunt');

module.exports = {
    task: {
        options: {
            pretty: grunt.option('target') !== 'prod',
            data: {
                debug: grunt.option('target') !== 'prod',
                pkg: grunt.file.readJSON('package.json'),
                profiles: grunt.file.readJSON('src/model/profiles.json'),
                summary: grunt.file.readJSON('src/model/summary.json'),
                docs: grunt.file.readJSON('src/model/docs.json'),
                experience: grunt.file.readJSON('src/model/experience.json')
            }
        },
        files: {
            'dist/index.html': 'src/markup/<%= pkg.name %>.jade'
        }
    }
};