import {IPerson, makePerson} from './utils/Person'
const testMakePerson = (): void => {
    let seo: IPerson = makePerson('seo')
    let han: IPerson = makePerson('han')
    console.log(seo, han)
}

testMakePerson()