const Responses = require('./API_responses')

exports.handler = async event => {
  console.log('event!!!', event.pathParameters)

  if(!event.pathParameters || !event.pathParameters.ID){
    //failed without an ID
    return Responses._400({message: "missing the ID from the path"})
  }

  let ID = event.pathParameters.ID

  if(data[ID]){
    return Responses._200(data[ID])
  }

  //failed as ID not in the data
  return Responses._400({message: 'no ID in data'})
}

const data = {
  1234: { name:"Mariana", age: 20, job: "journalist"},
  7891: { name:"Sandra", age: 40, job: "teacher"},
  5678: { name:"Wilmar", age: 45, job: "plasterer"}
}