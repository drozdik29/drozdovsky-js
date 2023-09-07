const FileReader = require('../helpers/fileReader');
//import readFile from '../helpers/fileReader';

const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);

const userData = {
    email: "1261716278678136381@max.com",
    password: "53x4am5F8dhdF",
    firstName: "Max",
    lastName: "Maxi",
    city: "Aberdeen",
    postCode: "12345",
    address1: "Aberdeenova street 1"
};

let productLinks = [44, 48, 68, 45, 32];

Feature('buy product');

Before(({ I }) => {
    I.login(userData);
});

Data(productLinks).Scenario('buy product', async ({ I, cartPage, productPage, current }) => {
        console.log(FileReader.convertStringToArray(productIds));
        I.amOnPage('http://opencart.qatestlab.net//index.php?route=product/product&product_id=' + current);
        await I.clearCart();
        console.log("Color exists?", await productPage.checkColorExists());
        if (await productPage.checkColorExists() == true) {
            productPage.selectColor();
        }
        console.log("Size exists?", await productPage.checkSizeExists());
        if (await productPage.checkSizeExists() == true) {
            productPage.selectSize();
        }
        const productPrice = await productPage.getProductPrice();
        I.goToCheckout();
        if(current===32){
            throw new Error('Product is n/a');
        }
        //cartPage.fillBillingDetails(userData);
        cartPage.fillDeliveryDetails();
        cartPage.payForProduct();
        console.log(productPrice);
        const totalPrice = await cartPage.getTotalPrice();
        const tax = await cartPage.getTax();
        cartPage.confirmAndVerifyOrder();
        I.assertEqual(productPrice + tax, totalPrice, "Prices are not in match!");
    } 
);