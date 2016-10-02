describe("The utility method", function() {
    it("isOdd", function() {
        expect(window.util.isOdd("Richard")).toBeNull();
        expect(window.util.isOdd(1)).toBe(true);
        expect(window.util.isOdd(8)).toBe(false);
    });

    it("formatText", function(){
        expect(window.util.formatText("Dragons' Den")).toBe("dragons-den");
        expect(window.util.formatText("Murdoch Mysteries")).toBe("murdoch-mysteries");
        expect(window.util.formatText("Mr. D")).toBe("mr-d");
        expect(window.util.formatText("Kim's Convenience")).toBe("kims-convenience");
        expect(window.util.formatText("Michael:Tuesdays & Thursdays")).toBe("michael-tuesdays-thursdays");
    });
});
