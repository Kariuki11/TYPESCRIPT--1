"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Ken",
    email: "K@dev.com",
    isActive: true
};
// function createUser({name: string, isPaid: boolean}) {}
// createUser()
function createUser(_a) {
    var name = _a.name, isPaid = _a.isPaid;
    // console.log(`User: ${name}, Paid: ${isPaid}`);
}
// Correct call with an argument
createUser({ name: "John", isPaid: true });
