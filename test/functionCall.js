//Testsuite - Mathematical operations

//Test cases:
//1. Addition
//2. Subtraction
//3. Multiplication
//4. Division

var assert = require('assert')

describe('Mathematical operations - Test suite', function () {

    this.timeout(5000);

    it('Addition of two numbers', function (done) {
        this.timeout(500);
        setTimeout(done, 3000);
        var a = 10;
        var b = 10;

        var c = a + b;

        assert.equal(c, 20);
    });

    it('Subtraction of two numbers', function () {
        var a = 10;
        var b = 10;

        var c = a - b;
        assert.equal(c, 0);
    });
    it('Multiplication of two numbers', function () {
        var a = 10;
        var b = 10;

        var c = a * b;
        assert.equal(c, 100);
    });
    it('Division of two numbers', function () {
        var a = 10;
        var b = 10;

        var c = a / b;
        assert.equal(c, 0);
    });

    // Pending Test i.e. a test without callback function
    it('This is a test for Pending Test Feature');

});


//To create package.json:
//npm --version
//npm install express
//npm init -y


//'npm test' to run the tests. Test files should be in the folder named 'test'

