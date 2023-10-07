const axios = require("axios");
function getAccessToken(AK,SK) {
    const url =
      "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=" +AK +"&client_secret=" +SK;
     
    return new Promise((resolve, reject) => {
      axios(url)
        .then((response) => {
          resolve(response.data.access_token);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  module.exports={
    getAccessToken
  }