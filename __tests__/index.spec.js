const fetch = require('node-fetch');


describe("sample test", () => {
    test("blah", () => {
        expect(true).toBe(true);
    });    
});

describe("dummy", () => {
    test("get request", async () => {
        const url = "http://localhost:8080/api/dummy";
        const result = await fetch(url).then(res => res.json());
        expect(result.message).toEqual("hi1");
    })
})