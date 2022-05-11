import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import './Todo.css';
const Todo = () => {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => setInfo(data));
    },[])
    return (
        <div>
            <h2>Information</h2>
            {
                info.map(data => <Data data={data}></Data>)
            }
        </div>
    );
};

export default Todo;