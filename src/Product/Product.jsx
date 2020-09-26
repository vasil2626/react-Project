import React, { Component } from 'react';
import Description from './Description';
import Name from './Name';
import Price from './Price'


class Product extends Component {
    render() {
        return (
            <div>
                <div>
                        Product name <Name name={this.props.name}/> 
                        Price <Price price={this.props.price}/>
                        Description <Description description={this.props.description} />
                  
                </div>

            </div>
        );
    };


}

export default Product;