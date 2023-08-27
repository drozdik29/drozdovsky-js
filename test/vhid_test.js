Feature('registration');

Scenario(' registration ',  ({ I }) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');
  
    const formattedDateTime = `${year}-${month}-${day}-${hours}-${minutes}-${seconds}`;
    const email = `${formattedDateTime}@gmail.com`;
    I.amOnPage('http://opencart.qatestlab.net/');
    I.resizeWindow(1680, 1050);
    I.click({xpath:'//*[@id="stuck"]/div/div/div/div/div/div/div/div/ul/li[10]/a'});
    I.click({xpath:'//*[@id="content"]/div/div[1]/div/a'});
    I.fillField({xpath:'//*[@id="input-firstname"]'},'Max');
    I.fillField({xpath:'//*[@id="input-lastname"]'},'123');
    I.fillField({xpath:'//*[@id="input-email"]'},email);
    I.fillField({xpath:'//*[@id="input-telephone"]'},'+380667869040');
    I.fillField({xpath:'//*[@id="input-password"]'},'53x4am5F8dhdF');
    I.fillField({xpath:'//*[@id="input-confirm"]'},'53x4am5F8dhdF');
    I.click({xpath:'//*[@id="content"]/form/fieldset[3]/div/div/label[1]'});
    I.click({xpath:'//*[@id="content"]/form/fieldset[3]/div/div/label[2]'});
    I.click({xpath:'//*[@id="content"]/form/div/div/input[1]'});
    I.click({xpath:'//*[@id="content"]/form/div/div/input[2]'});
    pause();
});

