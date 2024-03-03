var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CreateAccount = /** @class */ (function () {
    function CreateAccount() {
    }
    CreateAccount.prototype.makeEmail = function (user) {
        return "".concat(user, "@Test.com");
    };
    return CreateAccount;
}());
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " added as an user");
    };
    Users.prototype.deleteUser = function () { };
    return Users;
}(CreateAccount));
var U1 = new Users();
console.log(U1.addUser("amjad"));
console.log(U1.makeEmail("amjad"));
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employees.prototype.addEmployee = function (emp) {
        return "".concat(emp, " is added as an employee");
    };
    return Employees;
}(CreateAccount));
var E1 = new Employees();
console.log(E1.addEmployee("khan"));
console.log(E1.makeEmail("khan"));
