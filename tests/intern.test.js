const Intern = require('../lib/intern');

describe("Intern Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id, email and school properties", () => {
            const intern = new Intern("Laura", "123", "lcfhines@gmail.com", "Virginia")

            expect(intern).toEqual({
                name: "Laura",
                id: "123",
                email: "lcfhines@gmail.com",
                school: "Virginia"
            })
        })
    })
    describe("getSchool", () => {
        it("should return the school of an intern", () => {
            const school = "Virginia";
            const intern = new Intern("Laura", "123", "lcfhines@gmail.com", school);
            expect(intern.getSchool()).toEqual(school)
            
        })
    })
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const role = "Intern";
            const intern = new Intern ("Laura", "123", "lcfhines@gmail.com", "lcfhines");
            expect(intern.getRole()).toEqual(role)
        })
    })
})