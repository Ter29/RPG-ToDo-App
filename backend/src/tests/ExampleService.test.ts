import { ExampleService } from "../services/ExampleService";

describe("ExampleService", () => {
  it("should return true", () => {
    const service = new ExampleService();
    expect(service.exampleMethod()).toBe(true);
  });
});
