const Engineer = require('../lib/engineer');

describe("Engineer Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id, email and github properties", () => {
            const engineer = new Engineer("Laura", "123", "lcfhines@gmail.com", "lcfhines")

            expect(engineer).toEqual({
                name: "Laura",
                id: "123",
                email: "lcfhines@gmail.com",
                github: "lcfhines"
            })
        })
    })
    describe("getGithub", () => {
        it("should return the github username of an employee", () => {
            const github = "lcfhines";
            const engineer = new Engineer("Laura", "123", "lcfhines@gmail.com", github);
            expect(engineer.getGithub()).toEqual(github)
            
        })
    })
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const role = "Engineer";
            const engineer = new Engineer("Laura", "123", "lcfhines@gmail.com", "lcfhines");
            expect(engineer.getRole()).toEqual(role)
            
        })
    })
})