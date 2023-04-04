const { OAuth2Client } = require('google-auth-library');
const Promise = require('promise')
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);

module.exports.verify = function (credential) {

  return new Promise(async (resolve, reject) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: credential,
        audience: CLIENT_ID,
      });
      var payload = ticket.getPayload();
      resolve(payload);
    } catch (error) {
      reject(error)
    }
  })

}
