import React   from "react";
import Product from "./Product";

class Price extends  React.Component {

    render(){
        return(
            <p>
                
                {this.props.price}

            </p>
            
        );
    }
}

export default Price;
