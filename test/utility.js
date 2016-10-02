describe("The utility methods", function() {
  it("prime", function() {
    expect(window.util.isOdd(1)).toBe(true);
    expect(window.util.isOdd(8)).toBe(false);
  });
});
