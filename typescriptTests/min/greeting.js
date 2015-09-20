var Student = (function () {
    function Student(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + ' ' + middlename + ' ' + lastname;
    }
    return Student;
})();
function greeter(person) {
    return 'Hello, Super ' + person.firstname + ' ' + person.lastname + '!!!!';
}
var user = new Student('Jonathan', 'M.', 'Zielenkievicz');
document.body.innerHTML = greeter(user);
