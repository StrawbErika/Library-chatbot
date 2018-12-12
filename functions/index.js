const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.helloWorld = functions.https.onRequest((request, response) => {
    let parameters = request.body.queryResult.parameters
    let name = " "
    if(request.body.queryResult.action === 'getName'){
        name = parameters.name
        response.send({
            fulfillmentText: `Hi ya, ${name}! Is there anything you want to do?`
        });
    }
    switch(request.body.queryResult.action){
        case 'getBookTitle':
            response.send({
                fulfillmentText: `I'll get ${parameters.title}! Is there anything else you would like to do?`
            });
            break;
        case 'getBookAuthor':
            if(parameters.book === 'undefined'){
                response.send({
                    fulfillmentText: `I'll get ${parameters.author}'s books! Is there anything else you would like to do?`
                    });
            }
            else{
                response.send({
                    fulfillmentText: `I'll get ${parameters.book} by ${parameters.author}! Is there anything else you would like to do?`
                    });
            }
            break;
        case 'getBookCategory':
            response.send({
                fulfillmentText: `I'll get books in category: ${parameters.category}. Is there anything else you would like to do?`
                });
            break;
        case 'returnBook':
            response.send({
                fulfillmentText: `Thanks for returning ${parameters.returned}. Is there anything else you would like to do?`
                });
            break;
        case 'borrowBook':
            response.send({
                fulfillmentText: `Here is ${parameters.borrowed}. Is there anything else you would like to do?`
                });
            break;
    }
});

