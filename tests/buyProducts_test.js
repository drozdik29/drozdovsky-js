const userData = {
    email: "1261716278678136381@max.com",
    password: "53x4am5F8dhdF",
    firstName: "Max",
    lastName: "Maxi",
    city: "Aberdeen",
    postCode: "12345",
    address1: "Aberdeenova street 1"
};

Feature('buy product');

xScenario('buy product', async ({ I, cartPage, productPage }) => {
    I.login(userData);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=18&product_id=48');
    productPage.selectColor();
    productPage.selectSize();
    productPage.getProductPrice();
    const productPrice = productPage.getProductPrice();
    I.goToCheckout();
    //cartPage.fillBillingDetails(userData);
    cartPage.fillDeliveryDetails();
    cartPage.payForProduct();
    console.log(productPrice);
    const totalPrice = cartPage.getTotalPrice();
    const tax = cartPage.getTax();
    cartPage.confirmAndVerifyOrder();
    I.assertEqual(productPrice + tax, totalPrice, "Prices are not in match!");
},
Scenario('clean the basket', async ({ I, cartPage, productPage }) => {
    I.login(userData);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=18&product_id=48');
    I.clearTheBasket();
}))
