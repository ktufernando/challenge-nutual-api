const newman = require('newman');

newman.run({
    collection: 'postman/Challenge-Nutual.postman_collection.json',
    environment: 'postman/Local.postman_environment.json',
    reporters: ['htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './postman/report.html',
        }
    }
});