const Helper = require('@codeceptjs/helper');

class PriceHelper extends Helper {
  async parsePrice(priceString) {
    return await parseFloat(priceString.replace(/[^0-9.-]/g, ''));
  }

  async convertToUSD(total) {
    const usdRate = (await this.helpers['REST'].sendGetRequest('/exchange?valcode=USD&json')).data[0].rate;
    this.helpers['JSONResponse'].seeResponseCodeIs(200);
    return ( (usdRate*total).toFixed(2));
  }
}

module.exports = PriceHelper;