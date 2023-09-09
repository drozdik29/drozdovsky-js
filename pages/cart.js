const { I } = inject();
module.exports = {
    firstName: { xpath: '//*[@id="input-payment-firstname"]' },
    lastName: { xpath: '//*[@id="input-payment-lastname"]' },
    address1: { xpath: '//*[@id="input-payment-address-1"]' },
    city: { xpath: '//*[@id="input-payment-city"]' },
    postCode: { xpath: '//*[@id="input-payment-postcode"]' },
    state: { xpath: '//label[text()="Region / State"]' },
    stateOption: { xpath: '//label[text()="Region / State"]/following-sibling::div/ul/li[2]' },
    continueButton: { xpath: '//*[@id="button-payment-address"]' },
    continueButtonDeliveryDetails: { xpath: '//*[@id="button-shipping-address"]' },
    continueButtonDeliveryMethod: { xpath: '//*[@id="button-shipping-method"]' },
    payCommentForPay: { xpath: '//*[@id="collapse-payment-method"]/div/p[3]/textarea' },
    termsCheckbox: { xpath: '//*[@id="agree1"]' },
    continuePaymentButton: { xpath: '//*[@id="button-payment-method"]' },
    totalPrice: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[5]/td[2]' },
    flatShippingRate: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[2]/td[2]' },
    ecoTax: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[3]/td[2]' },
    vat: { xpath: '//*[@id="collapse-checkout-confirm"]/div/div[1]/table/tfoot/tr[4]/td[2]' },
    confirmAndVerifyOrderButton: { xpath: '//*[@id="button-confirm"]' },

    fillBillingDetails(userData) {
        I.fillField(this.firstName, userData.firstName);
        I.fillField(this.lastName, userData.lastName);
        I.fillField(this.address1, userData.address1);
        I.fillField(this.city, userData.city);
        I.fillField(this.postCode, userData.postCode);
        I.click(this.state);
        I.click(this.stateOption);
        I.click(this.continueButton);
        I.click(this.continueButton);
    },

    async fillDeliveryDetails() {
        I.click(this.continueButton);
        I.click(this.continueButtonDeliveryDetails);
        I.click(this.continueButtonDeliveryMethod);
    },

    async payForProduct() {
        I.fillField(this.payCommentForPay, 'JavaScript!=Java');
        I.click(this.termsCheckbox);
        I.click(this.continuePaymentButton);
    },

    async getTotalPrice() {
        const totalPrice = await I.parsePrice(await I.grabTextFrom(this.totalPrice))
        console.log('total price: ',totalPrice );
        return totalPrice;
    },

    async getTax() {
        console.log('vat: ', await I.parsePrice(await I.grabTextFrom(this.vat)));
        console.log('ecoTax: ', await I.parsePrice(await I.grabTextFrom(this.ecoTax)));
        console.log('flatShippingRate: ', await I.parsePrice(await I.grabTextFrom(this.flatShippingRate)));
        return await I.parsePrice(await I.grabTextFrom(this.vat)) + await I.parsePrice(await I.grabTextFrom(this.ecoTax)) + await I.parsePrice(await I.grabTextFrom(this.flatShippingRate));
    },

    confirmAndVerifyOrder() {
        I.click(this.confirmAndVerifyOrderButton);
        I.seeInTitle('Your order has been placed!');
    }
}