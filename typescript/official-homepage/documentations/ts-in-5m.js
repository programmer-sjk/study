var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    Student.prototype.printName = function () {
        console.log(this.fullName);
    };
    return Student;
}());
var user = new Student('Seo', 'Jeong Kuk');
var user2 = new Student('Seo', 'Jeong Kuk2');
user.printName();
user2.printName();
