//const querystring = require("querystring");
const Responses = require('./API_responses')

exports.handler = async event => {
  const requestBody = JSON.parse(event.body);
  console.log('entra en la fucnionn', requestBody)
  //console.log("event bodu", event.body)
  //const body = querystring.parse(event["body"]

  //console.log('event!!!', event.pathParameters)

    return Responses._200({ name:"Mariana", age: 20, job: "journalist"})

};