// Requiring Chai and the Chai expect interface.
var expect = require("chai").expect;
// const expect = chai.expect;
// Requiring fetch from Node Fetch.
// import fetch from "node-fetch";
const request = require("request");

/**
 * Utilizing Mocha's describe function to structure the test grouping the it() function and added a name to functionality under test (two
 * parameters: one is the name and the other the function that contains the test).
 * Utilizing Mocha's it() function to embody the test itself and added the test's name (two parameters: one is the test name and the other the
 * function that holds the body to the test).
 * Utilizing Chai's expect assertion interface. Set the URL of the Home page, as well as the GET request url. Set a name and type for testing
 * purposes.
 * Expecting the network status code's response to equal 200 (OK).
 */

describe("Status and content", function () {
  describe("Server communicates with client.", function () {
    it("Home Status", function (done) {
      request("http://localhost:3000", function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it("Get Status", function (done) {
      request(
        "http://localhost:8080/data/get",
        function (error, response, body) {
          expect(response.statusCode).to.equal(200);
          done();
        }
      );
    });
  });
});
