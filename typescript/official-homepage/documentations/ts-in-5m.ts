class Student {
    fullName: string;
    constructor(public firstName: string, public lastName: string) {
        this.fullName = firstName + ' ' + lastName
    }

    public printName() {
        console.log(this.fullName)
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

let user = new Student('Seo','Jeong Kuk')
let user2 = new Student('Seo','Jeong Kuk2')

user.printName()
user2.printName()


