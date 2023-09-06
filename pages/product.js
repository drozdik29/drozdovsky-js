const { I } = inject();


module.exports = {
    colorDropDown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' },
    sizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
    colorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]/a' },
    sizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]/a' },
    productPriceText: { xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span' },

     parsePrice(priceString) {
        return parseFloat(priceString.replace(/[^0-9.-]/g, ''));
    },

    selectColor() {
        I.click(this.colorDropDown);
        I.click(this.colorOption);
    },

    selectSize() {
        I.click(this.sizeDropDown);
        I.click(this.sizeOption);
    },

    async checkSizeExists() {
        return await tryTo(() => I.seeElement(this.sizeDropDown));
    },

    async checkColorExists() {
        return await tryTo(() => I.seeElement(this.colorDropDown));
    },

    async getProductPrice() {
        if (await this.checkColorExists() == true && await this.checkSizeExists() == true) {
            console.log('product price: ', this.parsePrice(await I.grabTextFrom(this.productPriceText)));
            console.log('color price: ', this.parsePrice(await I.grabTextFrom(this.colorOption)));
            console.log('size price: ', this.parsePrice(await I.grabTextFrom(this.sizeOption)));
            return this.parsePrice(await I.grabTextFrom(this.productPriceText)) + this.parsePrice(await I.grabTextFrom(this.colorOption)) + this.parsePrice(await I.grabTextFrom(this.sizeOption));
        }
        else if (await this.checkColorExists() == true && await this.checkSizeExists() == false) {
            console.log('product price: ', this.parsePrice(await I.grabTextFrom(this.productPriceText)));
            console.log('color price: ', this.parsePrice(await I.grabTextFrom(this.colorOption)));
            return this.parsePrice(await I.grabTextFrom(this.productPriceText)) + this.parsePrice(await I.grabTextFrom(this.colorOption));
        } else if (await this.checkColorExists() == false && await this.checkSizeExists() == true) {
            console.log('product price: ', this.parsePrice(await I.grabTextFrom(this.productPriceText)));
            console.log('size price: ', this.parsePrice(await I.grabTextFrom(this.sizeOption)));
            return this.parsePrice(await I.grabTextFrom(this.productPriceText)) + this.parsePrice(await I.grabTextFrom(this.sizeOption));
        }else if (await this.checkColorExists() == false && await this.checkSizeExists() == false){
            console.log('product price: ', this.parsePrice(await I.grabTextFrom(this.productPriceText)));
            return this.parsePrice(await I.grabTextFrom(this.productPriceText));
        }
    }
}