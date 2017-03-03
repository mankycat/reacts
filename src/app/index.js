import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {

        return (


            //it can only return one root elements , insert another div here won't be work properly
            //here is not the html code so that the class maybe change to className by jsf
            <div className="container">
                <div className="row">
                    <div className="col-xd-10 col-xs-offset-1">
                        <Header homelink="Home"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xd-10 col-xs-offset-1">
                        <Home name={"MAX"} initialAge={27}>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/> , window.document.getElementById("app"));