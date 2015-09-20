function greeter(person: string) {
    return 'Hello '+person;
}

var user = 'Super Jon Zielenievicz';

document.body.innerHTML = greeter(user);
