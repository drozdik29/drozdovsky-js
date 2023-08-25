Feature('vhid');

Scenario('test something',  ({ I }) => {
    I.amOnPage('https://fcdynamo.com/');
    pause();
    I.click({xpath:'//*[@id="slick-slide10"]/h3/a'});
    let text = I.grabTextFrom ({xpath:'/html/body/main/section/div/div/div[1]/div[1]/div[1]/div[2]/h1'})
    console.log(text)
});
