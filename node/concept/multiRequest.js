// Assume you have asynchronous functions that fetch data from different APIs
async function fetchDataFromApi1() {
    return new Promise(resolve => {
      // Simulating an asynchronous operation (e.g., API request)
      setTimeout(() => {
        console.log('Fetching data from API 1');
        resolve('Data from API 1');
      }, Math.random() * 2000);
    });
  }
  
  async function fetchDataFromApi2() {
    return new Promise(resolve => {
      // Simulating an asynchronous operation (e.g., API request)
      setTimeout(() => {
        console.log('Fetching data from API 2');
        resolve('Data from API 2');
      }, Math.random() * 2000);
    });
  }
  
  async function fetchDataFromApi3() {
    return new Promise(resolve => {
      // Simulating an asynchronous operation (e.g., API request)
      setTimeout(() => {
        console.log('Fetching data from API 3');
        resolve('Data from API 3');
      }, Math.random() * 2000);
    });
  }
  
  async function processApiRequests() {
    try {
      // Use Promise.all to fetch data from multiple APIs concurrently
      const [result1, result2, result3] = await Promise.all([
        fetchDataFromApi1(),
        fetchDataFromApi2(),
        fetchDataFromApi3()
      ]);
  
      // Process the results
      console.log('All API requests completed successfully');
      console.log('Results:', result1, result2, result3);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Call the function to process API requests
  processApiRequests();
  