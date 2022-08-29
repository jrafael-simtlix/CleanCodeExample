

import { equal } from "assert";
import echo from "./echo";

describe("Echo test suite", () => {
  it("should return expected string", () => {
    equal(echo(), "Helo word");
  });  
  it("should return expected string", () => {
    equal(echo("Jorge"), "Helo Jorge");
  });

});