export function makePerson(name: string, age: number) {
    return {name: name, age: age}
}

export function testMakePerson() {
    console.log(makePerson('seo', 31), makePerson('han', 100))
}