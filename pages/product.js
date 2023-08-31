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
    
    async getProductPrice() {
        const draftProductPrice = await I.grabTextFrom(this.productPriceText);
        const draftColorPrice = await I.grabTextFrom(this.colorOption);
        const draftSizePrice = await I.grabTextFrom(this.sizeOption);
    
        return parseFloat(draftProductPrice.replace(/[^0-9.-]/g, ''))+parseFloat(draftSizePrice.replace(/[^0-9.-]/g, ''))+parseFloat(draftColorPrice.replace(/[^0-9.-]/g, ''))
      },
    

}