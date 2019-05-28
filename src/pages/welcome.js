import React from 'react';

const bgStyle={
    height: '90vh',
    width: '100vw',
    border: '5px solid black',
    backgroundImage: "url(placeholder.jpg)"
}




class Landing extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            content: "description"
        }

    }
    
    pageChange = () => {
        if(this.state.content === "description")
        this.setState({content: "features"})
    
        if(this.state.content === "features"){
            this.setState({content: "team"})
        }
        if(this.state.content === "team"){
            this.setState({content: "description"})
        }
    }


    render(){
        if (this.state.content === "description"){
            return (
                <div style={bgStyle}>
                    <p>I need to learn more</p>
                    <button onClick={this.pageChange}>Next Page</button>
                </div>
            )
        }

        if(this.state.content === "features"){
            return(
                <div style={bgStyle}>
                    I Learned more!
                    <button onClick={this.pageChange}>Next Page</button>
                </div>
            )
        }

        if(this.state.content === "team"){
            return(
                <div style={bgStyle}>
                    team
                    <button onClick={this.pageChange}>Next Page</button>
                </div>
            )
        }
    }
}

export default Landing;