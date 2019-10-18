//
// Name: handler.js
// Auth: Martin Burolla
// Desc: The one and only handler for our serverless Lambda functions.
// Date: 10/18/2019
//

const headers = { 
  'x-api-version' : '0.0.1',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
  'x-cit-env': process.env.CIT_ENV
};

/**
 * GET /helloworld
 */
const helloWorld = async (event) => {
  const lambdaProxyResponse = { 
    statusCode: 200,
    body: {message: 'Hello World!'},
    headers: headers
  }
  return lambdaProxyResponse;
};
