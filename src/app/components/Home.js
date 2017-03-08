import React from "react";

export class Home extends React.Component {

    // constructor(props){
    //     super();
    //     this.state = {
    //         age: props.initialAge,
    //         status: 0,
    //         homeLink: props.initialLink
    //     };
    //     setTimeout(() => {
    //         this.setState({
    //             status: 1
    //         });
    //     },2000);
    // }
    //
    // onMakeOrder() {
    //     this.setState({
    //         age: this.state.age + 3
    //     });
    // }
    //
    // onChangeLink() {
    //     this.props.changeLinkName(this.state.homeLink)
    // }
    //
    // onChangeHandle(event) {
    //     this.setState({
    //         homeLink : event.target.value
    //     });
    // }

    render () {
        //console.log(this.props);
        return (
            //output dynamic content by {}
            // <div>
            //     <p>In a new Component</p>
            //     <p>Your name is {this.props.name}, your age is {this.state.age}</p>
            //     <p>Status : {this.state.status}</p>
            //     <hr />
            //     <button onClick={() => this.onMakeOrder()} className="btn btn-primary">Make me order</button>
            //     <br/>
            //     <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
            //     <hr/>
            //     <input type="text" value={this.state.homeLink} onChange={(event) => this.onChangeHandle(event)}/>
            //     <button className="btn btn-primary" onClick={this.onChangeLink.bind(this)}>Change Header Link</button>
            // </div>
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}
// Home.propType = {
//     name : React.PropTypes.string,
//     initialAge : React.PropTypes.number,
//     greet: React.PropTypes.func,
//     changeLinkName: React.PropTypes.func,
//     initialLink: React.PropTypes.string
// };

