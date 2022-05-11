import React from 'react';

const Mobile = (props) => {
    const {Counting} = props;
    return (
        <div>
            <button onClick={Counting}>battery down</button>
        </div>
    );
};

export default Mobile;