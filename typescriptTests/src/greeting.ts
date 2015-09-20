class Student {
    fullname: string;
    constructor(public firstname, public middlename, public lastname) {
        this.fullname = firstname+' '+middlename+' '+lastname;
    }
}

interface Person {
    firstname: string;
    lastname: string;
}

function greeter(person: Person) {
    return 'Hello, Super '+person.firstname+' '+person.lastname+'!!!!';
}

var user = new Student('Jonathan', 'M.', 'Zielenkievicz');

document.body.innerHTML = greeter(user);
