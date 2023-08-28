const { I } = inject();

module.exports ={
    firstName: {xpath:'//*[@id="input-firstname"]'},
    lastName:{xpath:'//*[@id="input-lastname"]'},
    email:{xpath:'//*[@id="input-email"]'},
    phoneNumber:{xpath:'//*[@id="input-telephone"]'},
    inputPassword:{xpath:'//*[@id="input-password"]'},
    confirmPassword:{xpath:'//*[@id="input-confirm"]'},
    yesButton:{xpath:'//*[@id="content"]/form/fieldset[3]/div/div/label[1]'},
    noButton:{xpath:'//*[@id="content"]/form/fieldset[3]/div/div/label[2]'},
    privacyPolicyAgreement:{xpath:'//*[@id="content"]/form/div/div/input[1]'},
    continueButton:{xpath:'//*[@id="content"]/form/div/div/input[2]'},

    fillNewUserForm(userData){
    I.fillField(this.firstName,userData.firstName);
    I.fillField(this.lastName,userData.lastName);
    I.fillField(this.email,userData.email);
    I.fillField(this.phoneNumber,userData.phone);
    I.fillField(this.inputPassword,userData.password);
    I.fillField(this.confirmPassword,userData.password);
    },

    clickToAgree(){
    I.click(this.yesButton);
    I.click(this.noButton);
    I.click(this.privacyPolicyAgreement);
    I.click(this.continueButton);
    },

    verifyRegisterAccountPage(){
        I.seeInTitle('Your Account Has Been Created!')
    }
}