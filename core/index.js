const { getAccessToken } = require("../utils/index");
const { ebInstantOne } = require("../model/index");
class Main {
  constructor() {
  
  }
  async info({ AK, SK }) {
    this._AK = AK;
    this._SK = SK;
    await this._getToken();
    return this;
  }
  async _getToken() {
    this.token = await getAccessToken(this._AK, this._SK);
  }
  ebInstantOne = ebInstantOne;
}
module.exports = Main;
