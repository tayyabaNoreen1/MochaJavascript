describe('Mocha Hooks', function () {

    before('Execute Before All Tests', function () {
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function (done) {
        this.timeout(500);
        setTimeout(done, 3000);
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function () {
        console.log('Execute After All Tests');
    });

    afterEach('Execute After Each Test', function () {
        console.log('Execute After Each Test');
    });

    it('Mocha Hooks Test', function () {
        console.log('Mocha - This is a Test for Mocha Hooks');
    })
})

//Use this to run tests for a particular file: npm test test\mochaHooks.js


//Different types of test execution reports:
//1. Default reporter: mocha test/ --reporter spec
//2. Reporter which gives results in form of dots(pass), comma(pending) and exclamation(failed) test cases: mocha test/ --reporter dot
//3. Third type: mocha test/ --reporter nyan
//4. 4th type: mocha test/ --reporter json



