const Manager = require('../lib/manager');

describe("Manager Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id, email and office number properties", () => {
            const manager = new Manager("Laura", "123", "lcfhines@gmail.com", 11)

            expect(manager).toEqual({
                name: "Laura",
                id: "123",
                email: "lcfhines@gmail.com",
                officeNumber: 11
            })
        })
    })
    describe("getOfficeNumber", () => {
        it("should return the office number of a manager", () => {
            const officeNumber = 11;
            const manager = new Manager("Laura", "123", "lcfhines@gmail.com", officeNumber);
            expect(manager.getOfficeNumber()).toEqual(officeNumber)
            
        })
    })
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const role = "Manager";
            const manager = new Manager("Laura", "123", "lcfhines@gmail.com", "lcfhines");
            expect(manager.getRole()).toEqual(role)
            
        })
    })
})