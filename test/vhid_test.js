Feature('registration');
  const selectors = require('./selectors.js');
Scenario(' registration ',  ({ I }) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
    const email = `${formattedDateTime}@gmail.com`;
    I.amOnPage('http://opencart.qatestlab.net/');
    I.resizeWindow(1680, 1050);
    I.click(selectors.myAccount);
    I.click(selectors.registration);
    I.fillField(selectors.firstName,'Max');
    I.fillField(selectors.lastName,'123');
    I.fillField(selectors.email,email);
    I.fillField(selectors.phoneNumber,'+380667869040');
    I.fillField(selectors.inputPassword,'53x4am5F8dhdF');
    I.fillField(selectors.confirmPassword,'53x4am5F8dhdF');
    I.click(selectors.yesButton);
    I.click(selectors.noButton);
    I.click(selectors.privacyPolicyAgreement);
    I.click(selectors.continueButton);
    pause();
});

