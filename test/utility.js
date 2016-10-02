describe("The utility methods", function() {
  it("is odd", function() {
    expect(window.util.isOdd("Richard")).toBeNull();
    expect(window.util.isOdd(1)).toBe(true);
    expect(window.util.isOdd(8)).toBe(false);
  });
});
