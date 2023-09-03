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

Scenario('buy product', async ({ I, cartPage, productPage }) => {
    I.login(userData);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=18&product_id=48');
    await I.clearCart();
    productPage.selectColor();
    productPage.selectSize();
    productPage.getProductPrice();
    const productPrice = await productPage.getProductPrice();
    I.goToCheckout();
    //cartPage.fillBillingDetails(userData);
    cartPage.fillDeliveryDetails();
    cartPage.payForProduct();
    console.log(productPrice);
    const totalPrice = await cartPage.getTotalPrice();
    const tax = cartPage.getTax();
    cartPage.confirmAndVerifyOrder();
    I.assertEqual(productPrice + tax, totalPrice, "Prices are not in match!");
});