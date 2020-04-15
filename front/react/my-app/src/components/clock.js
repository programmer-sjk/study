import React, {useEffect, useState} from 'react';

const Clock = () => {

    let timer = null;
    const [date, setDate] = useState(new Date())
    let list = [1,2,3,4,5]
    useEffect(() => {
        timer = setInterval(() => setDate(new Date()), 1000)

        return (() => {
            clearInterval(timer)
        })
    }, [])

    

    return (
        <>
            <h1> Hello World</h1>
            <h2> It is {date.toLocaleTimeString()}</h2>

            <ul>
                {list.map((v, idx) => 
                    <li key={idx}>{v}</li>
                )}
            </ul>
        </>
    )
}

export default Clock;