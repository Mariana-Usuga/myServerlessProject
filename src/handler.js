'use strict';

const querystring = require('querystring');

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
        message: `!!!!!Hola usuario  ${event.pathParameters.name}!!`,
        input: event,
      },
      null,
      2
    ),
  };
};

/*module.exports.createUser = async (event) => {
  console.log('entra en la fucnionn')

  //const body = querystring.parse(event["body"])
  //console.log('entra en la fucnionn', body)
  //console.log("event bodu", event.body)
  //const body = querystring.parse(event["body"]

  //console.log('event!!!', event.pathParameters)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `!Peticion para crear user`,
        input: event,
      },
      null,
      2
    ),
  };
};*/

module.exports.createUser = async (event) => {
  console.log('entra en la funcion')
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