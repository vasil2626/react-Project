import React from 'react';


function Names (props) {
    return(
        <div>
            <h4> Hello am {props.name.toUpperCase()} {props.surname.toUpperCase()}I am {props.age} years old</h4>
        </div>
    );
}

export default Names;