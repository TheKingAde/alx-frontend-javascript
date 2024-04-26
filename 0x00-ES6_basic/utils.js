// utils.js
function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

function createUser() {
  return Promise.resolve({
    firstName: 'Adegoke',
    lastName: 'Meffun',
  });
}

module.exports = { uploadPhoto, createUser };
