const axios = require("axios");
/**
 *  ERNIE-Bot-turbo大模型单次对话请求
 * @param {*} msg 
 * @returns ai回复内容
 */
function ebInstantOne(msg)  {
  return new Promise((resolve, reject) => {
    const url =
      "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/eb-instant?access_token=" +
      this.token;
    axios
      .post(url, {
        messages: [
          {
            role: "user",
            content: msg,
          },
        ],
      })
      .then((response) => {
        resolve(response.data.result||response.data);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};
module.exports={
    ebInstantOne 
}