const PriceHelper = require('../helpers/priceHelper');
const priceHelper = new PriceHelper();
const ElementCheckingHelper = require('../helpers/elementCheckingHelper');
const elCheck = new ElementCheckingHelper();
const { I } = inject();
module.exports = {
    colorDropDown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' },
    sizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
    colorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]/a' },
    sizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]/a' },
    productPriceText: { xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span' },
    available: { xpath: '//*[@id="content"]/div[1]/div[2]/div/ul/li[last()]' },

    async checkAvailable() {
        if (await I.grabTextFrom(this.available) == 'Availability: In Stock') {
            console.log('Product is available')
        } else {
            throw new Error('Product is n/a');
        }
    },

    async checkSizeExists() {
        return elCheck.checkElementExists(this.sizeDropDown);
    },

    async checkColorExists() {
        return elCheck.checkElementExists(this.colorDropDown);
    },

    async selectColor() {
        if (await this.checkColorExists() == true) {
            I.click(this.colorDropDown);
            I.click(this.colorOption);
        }
    },

    async selectSize() {
        if (await this.checkSizeExists() == true) {
            I.click(this.sizeDropDown);
            I.click(this.sizeOption);
        }
    },


    async getProductPrice() {
        let price = priceHelper.parsePrice(await I.grabTextFrom(this.productPriceText));
        console.log('product price: ', priceHelper.parsePrice(await I.grabTextFrom(this.productPriceText)));
        if (await this.checkColorExists() == true) {
            console.log('color price: ', priceHelper.parsePrice(await I.grabTextFrom(this.colorOption)));
            price += priceHelper.parsePrice(await I.grabTextFrom(this.colorOption));
            if (await this.checkSizeExists() == true) {
                console.log('size price: ', priceHelper.parsePrice(await I.grabTextFrom(this.sizeOption)));
                price += priceHelper.parsePrice(await I.grabTextFrom(this.sizeOption));
            }
        }
        return price;
    }
}
