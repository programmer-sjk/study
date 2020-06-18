import {readFileSync, readFile} from 'fs';

const buf: Buffer = readFileSync('./package.json')
console.log(buf.toString())

readFile('./package.json', (err: Error, buffer: Buffer) => {
    console.log('inside of cb')
    console.log(buffer.toString())
})

const readFilePromise = (file: string): Promise<string> =>  {
    return new Promise<string>((resolve, reject) => {
        readFile('./package.json', (err: Error, buffer: Buffer) => {
            if(err) 
                reject(err)
            else
                resolve(buffer.toString())
        })
    })
}

(async () => {
    const content = await readFilePromise('./package.json')
    console.log(content)
})()
