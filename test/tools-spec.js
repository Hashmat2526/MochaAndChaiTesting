var expect = require("chai").expect;
var tools = require("../lib/tools");
var nock = require("nock");

describe("tools", function() {
  describe("printName()", function() {
    it("SHOULD PRINT THE LAST NAME FIRST", function() {
      var results = tools.printName({ first: "Hashmat", last: "Ali" });
      expect(results).to.equal("Ali, Hashmat");
    });
  });

  describe("loadWiki()", function() {
    this.timeout(5000);

    // before(function() {
    //   nock("https://en.wikipedia.org")
    //     .get("/wiki/Muhammad_Ilyas_Qadri")
    //     .reply(200, "mock the page");
    // });

    it("Load Muhammad Ilyas Qadri's Wiki Page", function(done) {
      tools.loadWiki(
        { first: "Muhammad", mid: "Ilyas", last: "Qadri" },
        function(html) {
          console.log("passeddddddddd");
          expect(html).to.be.ok;
          done();
        }
      );
    });
  });
});
