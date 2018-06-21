const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    console.log(request.body.queryResult.action)
    switch(request.body.queryResult.action){
        case 'input.welcome':
            response.send({
                fulfillmentText: `Hi ya!`
            });
            break;
        case 'getBookTitle':
            response.send({
                fulfillmentText: `Ill get ${request.body.queryResult.parameters.title}`
            });
            break;

    }
 
});

