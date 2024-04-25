// 0-promise.js

function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call here
    // For demonstration purposes, let's resolve with a dummy response
    setTimeout(() => {
      const response = { data: 'Some data from API' };
      if (response.data) {
        resolve(response);
      } else {
        reject(new Error('No data received from API'));
      }
    }, 1000);
  });
}

export default getResponseFromAPI;
