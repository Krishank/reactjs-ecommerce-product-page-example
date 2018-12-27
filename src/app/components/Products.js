import React from "react";
import PropTypes from 'prop-types';

export class Products extends React.Component{
  constructor(props){
    super();
    this.cartHtml = "";
    this.setCartData=[];
    this.state = {
      "products": "",
      "cartData":""
    }
  }


  componentWillMount(){
    this.state.products = [
      {
        "name": "Item One",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "btnText": "Add To Cart",
        "quantity": 1
      },
      {
        "name": "Item Two",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "btnText": "Add To Cart",
        "quantity": 1
      },
      {
        "name": "Item Three",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "btnText": "Add To Cart",
        "quantity": 1
      },
      {
        "name": "Item Four",
        "link": "#",
        "price":"24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false,
        "btnText": "Add To Cart",
        "quantity": 1
      }
    ];
  }

  showBtn(key){
    this.state.products[key].addToCart=true;
    this.setState({
      "products": this.state.products
    });

  }

  hideBtn(key){
    this.state.products[key].addToCart=false;
    this.setState({
      "products": this.state.products
    });

  }

  genrateProducts(productsData){
    return productsData.map((product, index)=>{
      return (
        <div className="col-lg-4 col-md-6 mb-4" key={index} onMouseEnter={this.showBtn.bind(this, index)} onMouseLeave={this.hideBtn.bind(this, index)}>
            <div className="card h-100">
              <a href="#"><img className="card-img-top"  alt="" src={product.image}/></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{product.name}</a>
                </h4>
                <h5>${product.price}</h5>
                <p className="card-text">{product.dec}</p>
              </div>
              <div className="card-footer" raiting={product.raiting}>
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
            {(() => {
              if(product.addToCart) {
                return <button className=" col-lg-12 col-md-6 btn btn-primary" onClick={this.updateCart.bind(this, index)} >{product.btnText}</button>
              }
            })()}

         </div>
      )
    });

  }

  updateCart(key){
    if(this.state.products[key].btnText!=="Added"){
      this.state.products[key].btnText="Added";
      this.setCartData.push({
        "name": this.state.products[key].name,
        "price": this.state.products[key].price,
        "quantity": this.state.products[key].quantity
      })
      this.state.cartData = this.setCartData
      this.setState({
        "products": this.state.products,
        "cartData": this.state.cartData
      });
      this.genrateCart(this.state.cartData);
    }
  }


  genrateCart(cartData){

    this.cartHtml = cartData.map((item, i)=>{
      let total = 0;
      total= total+parseFloat(item.price, 10)
      return (
        <div className="list-group">
          <a href="#" className="list-group-item">
            Item: {item.name}
            and
            Price: {item.price}
          </a>
          <a href="#" className="list-group-item">Total: {total}</a>
        </div>
      )
    });

  }

  render(){
    return(
          <React.Fragment>
            <div className="col-lg-3">

              <h1 className="my-4">Cart</h1>
              {this.cartHtml}
            </div>

            <div className="col-lg-9">
              <div className="row">
                 {this.genrateProducts(this.state.products)}
              </div>
            </div>
          </React.Fragment>

    )
  }
}
