const FileReader = require('../helpers/fileReader');
const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);
const userData = {
    email: "1261716278678136381@max.com",
    password: "53x4am5F8dhdF",
    firstName: "Max",
    lastName: "Maxi",
    city: "Aberdeen",
    postCode: "12345",
    address1: "Aberdeenova street 1",
    IDs: FileReader.convertStringToArray(productIds)
};

Feature('buy product');

Before(({ I }) => {
    I.login(userData);
});

Data(userData.IDs).Scenario('buy product', async ({ I, cartPage, productPage, current }) => {
    I.amOnPage('http://opencart.qatestlab.net//index.php?route=product/product&product_id=' + current);
    await I.clearCart();
    await productPage.verifyAvailable();
    console.log("Color exists?", await productPage.checkColorExists());
    productPage.selectColor();
    console.log("Size exists?", await productPage.checkSizeExists());
    productPage.selectSize();
    const productPrice = await productPage.getProductPrice();
    I.goToCheckout();
    cartPage.fillDeliveryDetails();
    cartPage.payForProduct();
    console.log(productPrice);
    const totalPrice = await cartPage.getTotalPrice();
    const tax = await cartPage.getTax();
    cartPage.confirmAndVerifyOrder();
    console.log('Price in UA Hryvnias: ',await I.convertToUSD(totalPrice));
    I.assertEqual(productPrice + tax, totalPrice, "Prices are not in match!");
}
);