import React from "react";

export const Footer = React.memo(function Footer() {
  return (
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
      </div>
    </footer>
  );
});
