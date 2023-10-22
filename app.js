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
var school = /** @class */ (function () {
    function school(name) {
        this.students = [];
        this.teacher = [];
        this.name = name;
    }
    school.prototype.addStudent = function (stdObj) {
        this.students.push(stdObj);
    };
    school.prototype.addteacher = function (tecObj) {
        this.teacher.push(tecObj);
    };
    return school;
}());
var student = /** @class */ (function () {
    function student(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
    return student;
}());
var teacher = /** @class */ (function (_super) {
    __extends(teacher, _super);
    function teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return teacher;
}(student));
var school1 = new school("Alpha");
var school2 = new school("Nooby");
var S1 = new student("bilal", 69, school1.name);
var S2 = new student("hamza", 106, school2.name);
var t1 = new teacher("Anas", 28, school2.name);
var t2 = new teacher("Ali", 28, school1.name);
school1.addStudent(S1);
school2.addStudent(S2);
school1.addteacher(t1);
school2.addteacher(t2);
console.log(school1);
console.log(school2);
