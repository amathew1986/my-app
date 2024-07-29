// netlify/functions/api.js

exports.handler = async (event, context) => {
    // Your API logic here
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from the API!" }),
    };
  };