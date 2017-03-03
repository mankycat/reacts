import React from "react";

export class Home extends React.Component {

    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },2000);
    }

    onMakeOrder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    render () {
        //console.log(this.props);
        return (
            //output dynamic content by {}
            <div>
                <p>In a new Component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <hr />
                <button onClick={() => this.onMakeOrder()} className="btn btn-primary">Make me order</button>
            </div>
        );
    }
}
Home.propType = {
    name : React.PropTypes.string,
    initialAge : React.PropTypes.number,
};

