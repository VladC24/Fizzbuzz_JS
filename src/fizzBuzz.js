var Fizzbuzz = function() {};

Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
	if( number % 15 == 0 ) {
		return 'FizzBuzz'
	}
};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
	if ( number % 3 == 0) {
		return 'Fizz'
	}
}; 

Fizzbuzz.prototype.isDivisibleByFive = function(number) {
	if ( number % 5 == 0) {
		return 'Buzz'
	}
};
