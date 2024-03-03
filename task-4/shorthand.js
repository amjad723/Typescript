var Users = /** @class */ (function () {
    function Users(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Users.prototype.displayvalue = function () {
        console.log(this.name, this.age, this.email);
    };
    return Users;
}());
var u1 = new Users('amjad', 25, 'abc@Test.com');
//console.log(u1)
u1.displayvalue();
