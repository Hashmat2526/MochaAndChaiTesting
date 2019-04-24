var expect = require("chai").expect;
var rewire = require("rewire");
var order = rewire("../lib/order");
var sinon = require("sinon");

describe("Ordering Items", function() {
  beforeEach(function() {
    this.testData = [
      { sku: "AAB", qty: 10 },
      { sku: "BBB", qty: 0 },
      { sku: "CCC", qty: 3 }
    ];

    // this.console = {
    //   log: sinon.spy()
    // };
    // console.log(this.console);
    // order.__set__("console", {
    //   log: function(val) {
    //     console.log(val);
    //   }
    // });
    order.__set__("inventoryData", this.testData);
  });
  it("order an item when there are enough in stock", function(done) {
    var _this = this;

    order.orderItem("CCC", 3, function() {
      //   expect(_this.console.log.callCount).to.equal(1);
      done();
    });
  });
});
