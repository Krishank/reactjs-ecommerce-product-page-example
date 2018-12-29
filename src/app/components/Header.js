import React from "react";

export const Header = React.memo(function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Dummy Ecommerce React Example</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {props.navData.map((value, index)=> <li key={index} className="nav-item active"><a className="nav-link" href={value.link}>{value.text}</a></li>)}
          </ul>
        </div>
      </div>
    </nav>
  );
});
