import React from "react";
import PropTypes from 'prop-types';

export class Products extends React.Component{
  constructor(props){
    super();
    this.products = "";
    this.state = {
      "products": ""
    }
  }


  componentWillMount(){
    this.state.products = [
      {
        "name": "Item One",
        "link": "#",
        "price":"$24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false
      },
      {
        "name": "Item Two",
        "link": "#",
        "price":"$24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false
      },
      {
        "name": "Item Three",
        "link": "#",
        "price":"$24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false
      },
      {
        "name": "Item Four",
        "link": "#",
        "price":"$24.99",
        "dec": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "image": "http://placehold.it/700x400",
        "raiting": 4,
        "addToCart": false
      }
    ]
  }

  showBtn(key){
    console.log(this);
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
                <h5>{product.price}</h5>
                <p className="card-text">{product.dec}</p>
              </div>
              <div className="card-footer" raiting={product.raiting}>
                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
              </div>
            </div>
            {(() => {
              if(product.addToCart) {
                return <button className="btn btn-primary" >Add To Cart</button>
              }
            })()}

         </div>
      )
    });

  }

  render(){
    return(
          <React.Fragment>
            <div className="col-lg-3">

              <h1 className="my-4">Cart</h1>
              <div className="list-group">
                <a href="#" className="list-group-item">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
              </div>

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
