import React, { Component } from "react";


class Price extends Component {
constructor(props){
    super(props);

    this.state = {
        price: props.price,
        reat: 490
    };
}
buttonClick = ()=> {
    let {price, reat} = this.state;
    let sign = price[price.length - 1];
    if(sign === '$'){
        let amd =  parseFloat(price)* reat + '֏';
        this.setState({
            price: amd,
        }) 
    }
    else if(sign === '֏'){
        let usd =  parseFloat(price) /  reat + '$';
        this.setState({
            price: usd,
        }) 
    } 
}
      render(){
        return(
            <div>
                <p>
                {this.state.price}
                </p>
                <button onClick={this.buttonClick} >
                Click
                </button>
            </div>    
        );
    };
};
export default Price;
