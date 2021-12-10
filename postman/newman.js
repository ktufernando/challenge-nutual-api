const newman = require('newman');

newman.run({
    collection: 'postman/ValuationsTests.postman_collection.json', // Collection URL from a public link or the Postman API can also be used
    environment: 'postman/Local.postman_environment.json',
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './postman/report.html',
        }
    }
});