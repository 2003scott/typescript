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
console.log("hola mundo");
// types
var myString = "Hello work";
myString = 22 + "";
myString.split("");
var myNumber = 22;
var myBool = true || false;
var myVar = "hello";
myVar = false;
//Strings
document.write(myNumber.toString());
//Arrays
var stringArray = ["", "", ""];
var nomberArray = [1, 2, 3];
var booleanArray = [true, false];
var anyArray = [1, 2, true, "hello", [], {}];
// tuplas
var strNumTupl;
strNumTupl = ["hello", 22];
strNumTupl = ["word", 245];
// void , undefined, null
// let myVoid: void =  undefined
// let myNull: null = null
// let myUndefined:undefined = undefined
// document.write(typeof(myVoid))
// Funtions
function getSuma(num1, num2) {
    return num1 + num2;
}
console.log(getSuma(10, 20));
var mysub = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firsName, lasName) {
    if (lasName === undefined) {
        return firsName;
    }
    return "".concat(firsName, " ").concat(lasName);
}
document.write(getName("Scott", "Angeles"));
function myVoidFuntion() {
    return;
}
function showTodo(todo) {
    console.log("".concat(todo.title, " - ").concat(todo.text));
}
var myTodo = { title: 'Eat Dinner', text: 'lorem', };
showTodo(myTodo);
document.write();
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log("".concat(this.name, " is register"));
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log("".concat(this.name, " a pago de factura"));
    };
    return User;
}());
var scott = new User("scott", "diegoscott@gmail.com", 20);
// document.write(scott.name)
console.log(scott.register());
console.log(scott.AgeInYears());
var Menber = /** @class */ (function (_super) {
    __extends(Menber, _super);
    function Menber(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Menber.prototype.payInvoice = function () {
        _super.prototype.payInvoice;
    };
    return Menber;
}(User));
var gordon = new Menber(1, "gordon", "gordon@gmail.com", 20);
gordon.payInvoice();
document.write();
