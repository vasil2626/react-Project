import React, { Component } from 'react';
import Description from './Description';
import Name from './Name';
import Price from './Price'


class Product extends Component {
    render() {
        return (
            <div>
                <div>
                        <Name />  
                        {/* <Price /> */}
                        <Description  /> 
                  
                </div>

            </div>
        );
    };


}

export default Product;