const userData = {
  firstName: "Maksym",
  lastName: "123",
  email: Date.now() + '@test.com',
  phone:'+380667869040',
  password:'53x4am5F8dhdF'
};
Feature('registration');
Scenario(' registration ',  ({ I ,basePage,accountPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/');    
    basePage.clickMyAccount();
    basePage.clickRegister();
    accountPage.fillNewUserForm(userData);
    accountPage.clickToAgree();
    accountPage.verifyRegisterAccountPage();
});

