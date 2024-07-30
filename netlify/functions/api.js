// netlify/functions/api.js

// netlify/functions/api.js

// Utility function to parse cookies
const parseCookies = (cookieString) => {
  return cookieString
    .split(';')
    .map(cookie => cookie.trim())
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});
};

exports.handler = async (event, context) => {
    // Your API logic here
  const basePath = '/.netlify/functions/api';
  const path = event.path.replace(basePath, '');
    // Get cookies from the headers
  const cookies = event.headers.cookie ? parseCookies(event.headers.cookie) : {};
  // Access specific cookies
  const myCookie = cookies["2391-token"];
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello from the API! "+ path,cookies, myCookie }),
    };
  };
