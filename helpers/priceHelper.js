const Helper = require('@codeceptjs/helper');

class PriceHelper extends Helper {
    parsePrice(priceString) {
        return parseFloat(priceString.replace(/[^0-9.-]/g, ''));
    }
}

module.exports = PriceHelper;