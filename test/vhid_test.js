Feature('vhid');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://fcdynamo.com/');
    pause();
    I.click({xpath:'//*[@id="slick-slide10"]/h3/a'});
    I.click({xpath:'/html/body/header/div/div/div/div[2]/div[2]/div[2]/ul/li[1]/div/button/div/div/div'});
    I.fillField({xpath:"/html/body/header/div/div/div/div[2]/div[2]/div[2]/ul/li[1]/div/div/div/form/input[2]"},'Max');
});
