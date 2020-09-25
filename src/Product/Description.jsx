import React from 'react';

class Description extends React.Component {

    render(){
        return(
           <p>
               {this.props.des}
           </p>
        );

    }
}

export default Description;