import React from "react";
import PropTypes from 'prop-types';


export const Cart = React.memo(function Cart(props) {

  function filterData(products){
    let filteredData = {};
    return products.filter((product, index)=>{

      return product.addedInCart === true;
    })
  }

  function genrateCart(products){
    return filterData(products).map((product, index)=>{
      let total = 0;
      total= total+parseFloat(product.price, 10)
      return (
        <div className="list-group" key={index}>
          <a href="#" className="list-group-item">
            Item: {product.name}
            <hr/>
            Price: {product.price}
          </a>
          <a href="#" className="list-group-item">Total: {total}</a>
        </div>
      )
    });
  }

  // updateCart(key){
  //   if(this.state.products[key].btnText!=="Added"){
  //     this.state.products[key].btnText="Added";
  //     this.setCartData.push({
  //       "name": this.state.products[key].name,
  //       "price": this.state.products[key].price,
  //       "quantity": this.state.products[key].quantity
  //     })
  //     this.state.cartData = this.setCartData
  //     this.setState({
  //       "cartData": this.state.cartData
  //     });
  //     this.genrateCart(this.state.cartData);
  //   }
  // }

    return(
          <React.Fragment>

              {genrateCart(props.products)}

          </React.Fragment>

    )
});
