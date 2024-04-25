// 3-all.js

// 3-all.js

import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    // Use Promise.all to concurrently execute uploadPhoto and createUser functions
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    // Log the combined result to the console
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    // Log an error message if any of the promises reject
    console.error('Signup system offline');
  }
}

export default handleProfileSignup;
