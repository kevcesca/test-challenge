// You already have the methods imported

const {getUser, getUsers} = require('../users');

const users = require ('../data');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test("Regresa array de users completo", () => {
    expect(getUsers()).toStrictEqual(users);
})

test("Regresa el usuario con su respectivo id", () => {
    expect(getUser(3)).toStrictEqual(users[2]);
})

// READ documentation