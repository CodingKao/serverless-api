import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": String
});

const friends = dynamoose.model('friends', schema);

export const handler = async(event) => {
  // console.log('this is the body', event.body);
    // remember:  event.pathParameters.id

  const response = {statusCode: null, body: null,};
  
  try {
    let results = await friends.scan().exec();
    console.log('results-------', results);
    
    response.body = JSON.stringify(results);
    response.statusCode = 200;
  }catch(e){
    response.body = JSON.stringify(e.message);
    response.statusCode = 500;
  }
  
  
  // original response
  // const response = {
  //     statusCode: 200,
  //     body: JSON.stringify('Hello from Lambda!'),
  // };
  return response;
};
