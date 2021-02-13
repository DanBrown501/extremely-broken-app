const createToken = require("../helpers/createToken");

// TESTS BUG #5
describe("createToken", () => {
  it("should prevent token creation if username is falsy", function() {
    const username = undefined;
    const token = createToken(username, admin=false);
    expect(token).toBe(null);
  });
});