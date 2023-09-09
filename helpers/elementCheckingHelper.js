const  Helper  = require('@codeceptjs/helper');

class ElementCheckingHelper extends Helper {
  async checkElementExists(locator) {
    return Boolean(await this.helpers['Playwright'].grabNumberOfVisibleElements(locator));
  }

}

module.exports = ElementCheckingHelper;