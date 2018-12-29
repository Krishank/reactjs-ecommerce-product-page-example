import React from "react";
import PropTypes from 'prop-types';

export const Products = React.memo(function Products(props) {
  const getIndex = (elm)=> {
    return elm.currentTarget.getAttribute('index');
  }

  const showBtn = (elm)=> {
    const index =  getIndex(elm);
    props.products[index].addToCart=true;
    props.onUpdate('PRODUCT_HOVER_IN', props.products);
  }

  const hideBtn = (elm)=> {
    const index =  getIndex(elm);
    props.products[index].addToCart=false;
    props.onUpdate('PRODUCT_HOVER_OUT', props.products);
  }

  const addToCartHandler = (elm)=>{
    const index =  getIndex(elm);
    if(props.products[index].btnText!=="Added"){
        props.products[index].btnText = "Added";
        props.products[index].addedInCart = true;
        props.onUpdate('ADD_TO_CART', props.products);
    }else{
      alert("Product is Already Addin in Cart");
    }
  }

  const genrateProducts = (productsData)=> {
    return productsData.map((product, index)=>{
      const inlineStyle = {
        minHeight: "300px",
        marginBottom: "100px !important"
      }
      return (
        <div className="col-lg-4 col-md-6 mb-4" style={inlineStyle} index={index} key={index} onMouseEnter={(index)=>showBtn(index)} onMouseLeave={(index)=>{hideBtn(index)}}>
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
                return <button className=" col-lg-12 col-md-6 btn btn-primary" index={index} onClick={(index)=>addToCartHandler(index)} >{product.btnText}</button>
              }
            })()}

         </div>
      )
    });

  }
    return(
          <React.Fragment>
                 {genrateProducts(props.products)}
          </React.Fragment>

    )
});
