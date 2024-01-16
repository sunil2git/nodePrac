const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

// Proxy middleware configuration
const proxyOptions = {
  proxyReqPathResolver: (req) => {
    // Modify the request path if needed
    // For example, prepend '/api' to the original path
    return '/api' + req.originalUrl;
  },
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
    // Modify the proxy request options if needed
    // For example, add headers or authentication tokens
    proxyReqOpts.headers['Authorization'] = 'Bearer <your-auth-token>';
    return proxyReqOpts;
  },
};

// Define the proxy route
app.use('/api', proxy('http://example.com', proxyOptions));

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
