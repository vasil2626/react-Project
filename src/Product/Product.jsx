import React, { Component } from 'react';
import Description from './Description';
import Price from './Price'


class Product extends React.Component {
    render() {
        this.price = <Price />
        this.des = <Description />
        return (
            <div>  
                    Product Name  {this.props.name}<br/>
                    Product Price{this.props.price}<br/>
                    Product Description {this.props.des}
            </div>






        );
    };

}

export default Product;