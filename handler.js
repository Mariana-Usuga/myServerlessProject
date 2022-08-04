'use strict';

const querystring = require("querystring");

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.helloUser = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `!!!!!Hola usuarioooo ${event.pathParameters.name}!!`,
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.createUser = async (event) => {
  const body = querystring.parse(event["body"])
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `!Peticion para crear user`,
        input: `!Hola ${body.user}`,
      },
      null,
      2
    ),
  };
};