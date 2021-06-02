let namePage=function(){
    
       var input= element(by.model('yourName')); 

       this.enterName=function(inputText){

         input.sendKeys(inputText);

       };


       this.verfifyName=function(result){

        let valInserted= element(by.cssContainingText('.ng-binding', result));
         expect(valInserted.getText()).toEqual(result);


       };

};
module.exports=new namePage();