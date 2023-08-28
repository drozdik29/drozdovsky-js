const { I } = inject();


module.exports = {
    myAccount:{xpath:'//*[@id="stuck"]/div/div/div/div/div/div/div/div/ul/li[10]/a'},
    language:{xpath:'//*[@id="form-language"]/div/span'},
    enLanguage:{xpath:'//*[@id="form-language"]/div/ul/li[1]/button'},
    registration:{xpath:'//*[@id="content"]/div/div[1]/div/a'},

    clickMyAccount() {
        I.click(this.myAccount);
        I.click(this.language);
        I.click(this.enLanguage);
      },
    
      clickRegister() {
        I.click(this.registration);
      }
    }
