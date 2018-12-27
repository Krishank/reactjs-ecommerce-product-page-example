import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { Products } from "./components/Products";

class App extends React.Component {
    constructor(props){
      super();
      this.state={
        homeLinkText: "Product Page"
      }
    }
    onHeaderTextChange(newName){
      this.setState({
        homeLinkText: newName
      })
    }
    render() {
      const navData = [
        {
          "text":"Home",
          "link":"#"
        },
        {
          "text":"Products",
          "link":"#"
        },
        {
          "text":"About",
          "link":"#"
        },
        {
          "text":"Service",
          "link":"#"
        },
        {
          "text":"Contact",
          "link":"#"
        }
      ]
        return (
            <div className="container">
                <div className="row" style={{marginBottom: 100 + 'px'}}>
                        <Header navData={navData} />
                </div>

                <div className="row">
                    <Products/>
                </div>

                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                          name={"Krishank Dwivedi"}
                          age={28}
                          onChangeLink={(newName)=> this.onHeaderTextChange(newName)}
                          intialLinkName={this.state.homeLinkText}
                             />
                    </div>
                </div>
                <div className="row">
                      <Footer/>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));
