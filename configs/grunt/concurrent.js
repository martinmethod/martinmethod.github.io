module.exports = {

    build: [
        // favicons
        ['realFavicon'],

        // markup
        ['jade'],

        // styles
        ['compass'],

        // scripts
        ['concat', 'uglify']
    ],

    prod: [
        'htmlmin',
        'copy:plugins'
    ],

    review: [
        'open:build',
        'open:repo',
        'open:prod'
    ]

};