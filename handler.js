//
// Name: handler.js
// Auth: Martin Burolla
// Desc: The one and only handler for our serverless Lambda functions.
// Date: 10/18/2019
//

const headers = { 
  'x-api-version' : '0.0.1',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

/**
 * GET /helloworld
 */
module.exports.helloWorld = async (event) => {
  const lambdaProxyResponse = { 
    statusCode: 200,
    body: {message: 'Hello World!'},
    headers: headers
  }
  return lambdaProxyResponse;
};

module.exports.helloWorldConsole = async (event) => {
  return { message: `Hello World from ${process.env.THE_ENV}.` }
}
