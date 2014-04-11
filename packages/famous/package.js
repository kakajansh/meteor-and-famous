Package.describe({
    summary: 'Famous application in meteor.'
});

Package.on_use(function (api) {
    api.use('ui', 'client')
    
    api.add_files([
        'lib/famous.css', 'lib/polyfills.js', 'lib/famous.js',
        'famous_wrapper.js'
    ], 'client');

    api.export('Famous', 'client');
});