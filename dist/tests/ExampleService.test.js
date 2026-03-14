"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExampleService_1 = require("../services/ExampleService");
describe("ExampleService", () => {
    it("should return true", () => {
        const service = new ExampleService_1.ExampleService();
        expect(service.exampleMethod()).toBe(true);
    });
});
//# sourceMappingURL=ExampleService.test.js.map