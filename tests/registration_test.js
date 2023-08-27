const userData = {
  firstName: "Maksym",
  lastName: "123",
  email: Date.now() + '@test.com',
  phone:'+380667869040',
  password:'53x4am5F8dhdF'
};
Feature('registration');
  const selectors = require('./selectors.js');
Scenario(' registration ',  ({ I }) => {
    I.amOnPage('http://opencart.qatestlab.net/');
    I.click(selectors.language);
    I.click(selectors.enLanguage);
    I.click(selectors.myAccount);
    I.click(selectors.registration);
    I.fillField(selectors.firstName,userData.firstName);
    I.fillField(selectors.lastName,userData.lastName);
    I.fillField(selectors.email,userData.email);
    I.fillField(selectors.phoneNumber,userData.phone);
    I.fillField(selectors.inputPassword,userData.password);
    I.fillField(selectors.confirmPassword,userData.password);
    I.click(selectors.yesButton);
    I.click(selectors.noButton);
    I.click(selectors.privacyPolicyAgreement);
    I.click(selectors.continueButton);
    I.seeInTitle('Your Account Has Been Created!')
});

