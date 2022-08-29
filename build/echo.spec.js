"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var echo_1 = require("./echo");
describe("Echo test suite", function () {
    it("should return expected string", function () {
        (0, assert_1.equal)((0, echo_1["default"])(), "Helo word");
    });
    it("should return expected string", function () {
        (0, assert_1.equal)((0, echo_1["default"])("Jorge"), "Helo Jorge");
    });
});
