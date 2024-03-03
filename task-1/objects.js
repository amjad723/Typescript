var person = {
    name: 'amjad',
    age: 27,
    email: 'abc@test.com'
};
var person2 = {
    name: 'khan',
    age: 30,
    email: 'abcef@test.com'
};
console.log(person.name);
console.log(person2.name);
////////arrays
var arr = ['java', 'node', 'php'];
console.warn(arr);
////////enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
console.log(Role);
