import React from 'react';
import './Data.css';
const Data = (props) => {
    const{title, id} = props.data;
    return (
       <div className="data">
         <div style={{color:'red'}}>
            <h3>title:{title}</h3>
            <p>id: {id}</p>
        </div>
       </div>
    );
};

export default Data;