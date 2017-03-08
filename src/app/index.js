import React from "react";
import { render } from "react-dom";
import {Router , Route , browserHistory , IndexRoute} from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";

class App extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //       homeLink:"Home"
    //     };
    // }
    // //called from child
    // onGreet(){
    //     alert("Hello!!");
    //
    // }
    //
    // onChangeLinkName(newName){
    //     this.setState({
    //         homeLink : newName
    //     });
    // }

    render() {
        return (
            //it can only return one root elements , insert another div here won't be work properly
            //here is not the html code so that the class maybe change to className by jsf
            // <div className="container">
            //     <div className="row">
            //         <div className="col-xd-10 col-xs-offset-1">
            //             <Header homelink={this.state.homeLink}/>
            //         </div>
            //     </div>
            //    {/*<div className="row">*/}
            //         <div className="col-xd-10 col-xs-offset-1">
            //             <Home name={"MAX"}
            //                   initialAge={27}
            //                   greet={this.onGreet}
            //                   initialLink={this.state.homeLink}
            //                   changeLinkName={this.onChangeLinkName.bind(this)}>
            //             </Home>
            //         </div>
            //     </div>
            // </div>
            // <Root>
            //     <Home></Home>
            // </Root>
            //user abc.com/#/user hashTag style of url when entering none exists url then return index
            <Router history={browserHistory}>
                <Route path={"/"} component={Root}>
                    <IndexRoute component={Home}/>
                    <Route path={"user/:id"} component={User}/>
                    <Route path={"home"} component={Home}/>
                </Route>
                <Route path={"home"} component={Home}/>
            </Router>
        );
    }
}

render(<App/> , window.document.getElementById("app"));