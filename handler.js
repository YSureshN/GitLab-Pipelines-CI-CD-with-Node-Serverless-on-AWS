//
// Name: handler.js
// Auth: Martin Burolla
// Date: 10/18/2019
// Desc: The one and only handler for our serverless Lambda functions.
//

const headers = { 
  'x-api-version' : '0.0.1',
  'x-env': `${process.env.THE_ENV}`,
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true
};

/**
 * GET /helloworld
 */
module.exports.helloWorld = async (event) => {
  const lambdaProxyResponse = { 
    statusCode: 200,
    body: JSON.stringify({message: `Hello World from ${process.env.THE_ENV}.`}),
    headers: headers
  }
  return lambdaProxyResponse;
};

/**
 * Lambda function.
 */
module.exports.helloWorldConsole = async (event) => {
  return { message: `Hello World from ${process.env.THE_ENV}.` }
};
