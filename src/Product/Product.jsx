import React, { Component } from 'react';
import Description from './Description';
import Name from './Name';
import Price from './Price'


class Product extends Component {
    render() {
        return (
            <div>
                <div>
                        <Name name={this.props.name}/>  
                        <Price price={this.props.price} reat={this.props.reat}  />
                        <Description desc={this.props.desc}/> 
                  
                </div>

            </div>
        );
    };


}

export default Product;