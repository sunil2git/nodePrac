class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = 'CustomError';
      this.statusCode = 500; // You can include custom properties in your error
    }
  }
  
  // Creating an instance of the custom error
  const customErrorInstance = new CustomError('This is a custom error message.');
  
  // Example of using the custom error instance
  try {
    
    throw customErrorInstance;
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(`Caught a custom error: ${error.message}`);
      console.error(`Status Code: ${error.statusCode}`);
    } else {
      console.error(`Caught an unexpected error: ${error.message}`);
    }
  }
  