describe('FizzBuzz', function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

    it('fizzes for 3', function() {
      expect(fizzBuzz.game(3)).toEqual('Fizz');
    });

    it('buzzes for 5', function() {
      expect(fizzBuzz.game(5)).toEqual('Buzz');
    });

    it('fizzbuzzes for 15', function() {
      expect(fizzBuzz.game(15)).toEqual('FizzBuzz');
    });

    it('1 for 1', function() {
      expect(fizzBuzz.game(1)).toEqual(1);
    });

});
