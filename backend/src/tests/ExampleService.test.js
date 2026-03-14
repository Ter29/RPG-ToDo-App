"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExampleService_1 = require("../services/ExampleService");
describe("ExampleService", function () {
    it("should return true", function () {
        var service = new ExampleService_1.ExampleService();
        expect(service.exampleMethod()).toBe(true);
    });
});
