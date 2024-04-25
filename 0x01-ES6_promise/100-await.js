// 100-await.js

import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser functions concurrently using Promise.all
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Return an object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If one of the async functions fails, return an empty object
    console.error('Error:', error);
    return {
      photo: null,
      user: null,
    };
  }
}

export default asyncUploadUser;
