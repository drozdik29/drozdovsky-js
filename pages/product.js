const { I } = inject();
module.exports = {
    colorDropDown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' },
    sizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
    colorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]/a' },
    sizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]/a' },
    productPriceText: { xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span' },
    available: { xpath: '//*[@id="content"]/div[1]/div[2]/div/ul/li[last()]' },

    async verifyAvailable() {
        if (await I.grabTextFrom(this.available) == 'Availability: In Stock') {
            console.log('Product is available')
        } else {
            throw new Error('Product is n/a');
        }
    },

    async checkSizeExists() {
        return I.checkElementExists(this.sizeDropDown);
    },

    async checkColorExists() {
        return I.checkElementExists(this.colorDropDown);
    },

    async selectColor() {
        if (this.checkColorExists) {
            I.click(this.colorDropDown);
            I.click(this.colorOption);
        }
    },

    async selectSize() {
        if (this.checkSizeExists) {
            I.click(this.sizeDropDown);
            I.click(this.sizeOption);
        }
    },


    async getProductPrice() {
        let price = await I.parsePrice(await I.grabTextFrom(this.productPriceText));
        console.log('product price: ', await I.parsePrice(await I.grabTextFrom(this.productPriceText)));
        if ( this.checkColorExists) {
            console.log('color price: ',await I.parsePrice(await I.grabTextFrom(this.colorOption)));
            price += await I.parsePrice(await I.grabTextFrom(this.colorOption));
        }
        if ( this.checkSizeExists) {
            console.log('size price: ',await I.parsePrice(await I.grabTextFrom(this.sizeOption)));
            price += await I.parsePrice(await I.grabTextFrom(this.sizeOption));
        }
        return price;
    }
}
