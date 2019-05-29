describe('Fizzbuzz', function() {
  var fizzbuzz = new Fizzbuzz();

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual('Fizz');
    });

    it('divisible by 5 ', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toEqual('Buzz');
    });
    
  });

});
