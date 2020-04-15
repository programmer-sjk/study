import React, {useEffect, useState} from 'react';

const Example = () => {
    
    const [list, setList] = useState([
        {name: 'foo1', id:1},
        {name: 'bar2', id:2},
    ])

    const addItem = () => {
        setList([...list, {name: 'baz3', id: 3}]);
        setTimeout(() => console.log(list), 3000)
    }

    const getKey = (v, idx) => {
        const ret = v.id === 3 && 3 || idx
        console.log(ret)
        return ret;
    }

    return (
        <>
            <input type="button" value="추가" onClick={addItem} />

            <h2> show bad </h2>
            {list.map((v, idx) => 
                <div key={idx}> {v.name} <input type="text" /> </div>
            )}

            <h2> show good </h2>
            {list.map((v) => 
                <div key={v.id}> {v.name} <input type="text" /> </div>
            )}
        </>
    )
}

export default Example;