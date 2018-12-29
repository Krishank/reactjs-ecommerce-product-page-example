import React from 'react';
import { render } from 'react-dom';

import { Cart } from "../components/Cart";
import { Products } from "../components/Products";


export class ProductsContainer extends React.Component {

    constructor(props){
      super();
      this.state = {
        "products": [
          {
            "name": "Item One",
            "link": "#",
            "price":"24.99",
            "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            "image": "http://placehold.it/700x400",
            "raiting": 4,
            "addToCart": false,
            "addedInCart": false,
            "btnText": "Add To Cart",
            "maxQuantity": 5
          },
          {
            "name": "Item Two",
            "link": "#",
            "price":"24.99",
            "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            "image": "http://placehold.it/700x400",
            "raiting": 4,
            "addToCart": false,
            "addedInCart": false,
            "btnText": "Add To Cart",
            "maxQuantity": 1
          },
          {
            "name": "Item Three",
            "link": "#",
            "price":"24.99",
            "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            "image": "http://placehold.it/700x400",
            "raiting": 4,
            "addToCart": false,
            "addedInCart": false,
            "btnText": "Add To Cart",
            "maxQuantity": 3
          },
          {
            "name": "Item Four",
            "link": "#",
            "price":"24.99",
            "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
            "image": "http://placehold.it/700x400",
            "raiting": 4,
            "addToCart": false,
            "addedInCart": true,
            "btnText": "Add To Cart",
            "maxQuantity": 2
          }
        ]
      }
    }

    componentDidMount(){
      this.setState({
        ...this.state,
        "products":this.state.products,
        "cartData": this.state.cartData
      });
    }

    updateState(action, payload){
      switch (action) {
        case "PRODUCT_HOVER_IN":
              this.setState({
                ...this.state.products,
                "products": this.state.products
              });
          break;

        case "PRODUCT_HOVER_OUT":
              this.setState({
                ...this.state.products,
                "products": this.state.products
              });
          break;

        case "ADD_TO_CART":
              this.setState({
                ...this.state.products,
                "products": this.state.products
              });
          break;

        case "REMOVE_FROM_CART":
              this.setState({
                ...this.state.products,
                "products": this.state.products
              });
          break;

        default:

      }
    }

    render() {

        return (
            <React.Fragment>
              <div className="col-lg-3">

                <h1 className="my-4">Cart</h1>
                <Cart products={this.state.products} onUpdate={(action, payload)=>{this.updateState(action, payload)}} />

            </div>

              <div className="col-lg-9">
                <div className="row">
                    <Products products={this.state.products} onUpdate={(action, payload)=>{this.updateState(action, payload)}} />
                </div>
              </div>
            </React.Fragment>
        );
    }
}
