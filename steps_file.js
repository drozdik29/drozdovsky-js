const { myAccount, language, enLanguage } = require("./pages/base");
emailField = { css: "#input-email" };
passwordField = { css: "#input-password" };
loginButton = { xpath: '//*[@id="content"]/div/div[2]/div/form/input[1]' };
myOrdersText = { xpath: '//*[@id="content"]/h2[2]' };
addToCart = { xpath: '//*[@id="button-cart"]' };
bucket = { xpath: '//*[@id="cart"]/button/i' };
goToCheckout = { xpath: '//*[@id="cart"]/ul/li[3]/div/a[2]' };
basket = { xpath: '//*[@id="cart-total2"]' };
delButton = { xpath: '//*[@id="cart"]/ul/li[1]/div[1]/button[2]/i' };
module.exports = function () {
  return actor({
    login(userData) {
      this.amOnPage('http://opencart.qatestlab.net/');
      this.click(myAccount);
      this.fillField(emailField, userData.email);
      this.fillField(passwordField, userData.password);
      this.click(loginButton);
      this.click(language);
      this.click(enLanguage);
      this.seeTextEquals("My Orders", myOrdersText);
    },
    goToCheckout() {
      this.click(addToCart);
      this.click(bucket);
      this.click(goToCheckout);
    },
    async clearCart() {
      const elements = await this.grabNumberOfVisibleElements(basket);
      if (elements > 0) {
          this.click(bucket);
          let itemCount;
          do {
              itemCount = await this.grabNumberOfVisibleElements(delButton);
              if(itemCount>0){
                  this.click(delButton);
              }
          } while (itemCount > 0);
      } else {
          console.log("The basket is empty. No need to delete items.");
      }
  }
  });
}
