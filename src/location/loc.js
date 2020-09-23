import React from 'react';

function Residence (props) {
    return(
        <p>
            I live in {props.res.toUpperCase()}
        </p>
    );
}

export default Residence;