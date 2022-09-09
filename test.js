let expect = chai.expect;

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 
describe('myFunctions', function(){
    describe('shuffleArray', function(){
        it('should take the array input and shuffle it randomly', function(){
            let x = shuffleArray(arr);
            expect(x).to.equal(); 
        });
        it('will Probably give an error with out an array', function(){
            expect(function(){
                shuffleArray(fred);
            }).to.Throw();
        });
    });
});