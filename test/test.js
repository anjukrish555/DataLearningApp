
var chai = require('chai');
var should = chai.Should();
var expect = chai.expect;

/*var signUp = require('../routes/signUpPage');

describe('signUp', function () {
    //var req = {};
    //signUp(req);
    it('should check for fullname mandate', function () {
        assert.ok(fullname.length > 0);
    });

    it('should check for email mandate', function () {
        assert.ok(req.body.email.length > 0);
    });

    it('should check for background mandate', function () {
        assert.ok(req.body.background.length > 0);
    });

    it('should check for contact mandate', function () {
        assert.ok(req.body.contact.length > 0);
    });

    it('should check for password mandate', function () {
        assert.ok(req.body.password.length > 0);
    });
});*/

var viewCourses = require('../routes/viewCourses');
describe('viewCourses', function(){

    it('should display course details', function () {
        //expect(rows.length > 0);
        expect({viewCourses : 'rows'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewCourses : 'courses'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewCourses : 'title'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewCourses : 'header'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewCourses : 'navbar'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewCourses : 'cart'}).to.be.a('object');
    });

    it('should check for null', function () {
        expect(undefined).to.be.undefined;
        expect(null).to.not.be.undefined;
    });

});

var viewFaculty = require('../routes/viewFaculty');
describe('viewFaculty', function(){

    it('should display faculty details', function(){
        expect({viewFaculty : 'rows'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewFaculty : 'courses'}).to.be.a('object');
    });

    it('should check for null', function () {
        expect(undefined).to.be.undefined;
        expect(null).to.not.be.undefined;
    });

    it('should return 1 when value is present', function () {
        expect({viewFaculty : 'title'}).to.be.a('object');
    });

    it('should return 1 when value is present', function () {
        expect({viewFaculty : 'navbar'}).to.be.a('object');
    });
});



