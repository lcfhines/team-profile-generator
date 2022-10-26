
const Employee = require('../lib/employee');

describe("Employee Class", () => {
    describe("Initialization", () => {
        it("should make an object with name, id and email properties", () => {
            // ARRANGE
            const employee = new Employee("Laura", "11", "lcfhines@gmail.com")
            // ACT
            // ASSERT
            expect(employee).toEqual({
                name: "Laura",
                id: "11",
                email: "lcfhines@gmail.com"
            })
        })
    })
    describe("getName", () => {
        it("should return the name of an employee", () => {
            const name = "Laura"
            const employee = new Employee(name);
            expect(employee.getName()).toEqual(name);
            
        })
    })
    describe("getID", () => {
        it("should return the ID of an employee", () => {
            const id = "123"
            const employee = new Employee("Laura", id);
            expect(employee.getId()).toEqual(id)
            
        })
    })
    describe("getEmail", () => {
        it("should return the email of an employee", () => {
            const email = "test@email.com"
            const employee = new Employee("Laura", "123", email);
            expect(employee.getEmail()).toEqual(email)
            
        })
    })
    describe("getRole", () => {
        it("should return the role of an employee", () => {
            const role = "Employee"
            const employee = new Employee("Laura", "123", "test@email.com");
            expect(employee.getRole()).toEqual(role)
            
        })
    })
})