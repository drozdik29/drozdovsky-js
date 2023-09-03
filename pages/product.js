const { I } = inject();


module.exports = {
    colorDropDown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' },
    sizeDropDown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' },
    colorOption: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]' },
    sizeOption: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]' },
    productPriceText: { xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span' },

    selectColor() {
        I.click(this.colorDropDown);
        I.click(this.colorOption);
    },

    selectSize() {
        I.click(this.sizeDropDown);
        I.click(this.sizeOption);
    },

    async parsePrice(priceString) {
        return await parseFloat(priceString.replace(/[^0-9.-]/g, ''));
    },

    async getProductPrice() {
        return this.parsePrice(await I.grabTextFrom(this.productPriceText)) + this.parsePrice(await I.grabTextFrom(this.sizeOption)) + this.parsePrice(await I.grabTextFrom(this.colorOption));
    },


}