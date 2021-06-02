
let namepage=require('../pages/namepage');

describe('Calculator Test',function(){

 
    it ('enter value test',function(){


        browser.get('https://angularjs.org/');
        browser.manage().window().maximize();
        namepage.enterName('arka');
        namepage.verfifyName('Hello arka!');
        browser.sleep(5000);

    });


});