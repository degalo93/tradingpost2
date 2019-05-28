import React from 'react';
import {Container, Row, Col} from '../components/Grid';
import DevCard from '../components/DevCard';

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
                    <Container>
                    <p>Description</p>
                    <button onClick={this.pageChange}>Next Page</button>
                    </Container>
                </div>
                
            )
        }

        if(this.state.content === "features"){
            return(
                <div style={bgStyle}>
                    <Container>
                    <p>Features</p>
                    <Row>
                    <DevCard
                    name="Dennis"
                        bio="Dennis enjoys long walks on the beach and fine wines"
                        image="https://i.imgur.com/BxjCkO2.jpg"
                    />
                    <DevCard
                    name="Dennis"
                        bio="Dennis enjoys long walks on the beach and fine wines"
                        image="https://i.imgur.com/BxjCkO2.jpg"
                    />
                    <DevCard
                    name="Dennis"
                        bio="Dennis enjoys long walks on the beach and fine wines"
                        image="https://i.imgur.com/BxjCkO2.jpg"
                    />
                    </Row>
                    <button onClick={this.pageChange}>Next Page</button>
                    </Container>
                </div>
            )
        }

        if(this.state.content === "team"){
            return(
                <div style={bgStyle}>
                    <Container>
                    <p>Team</p>
                    <Row>
                    <DevCard
                    name="Dennis"
                        bio="Dennis enjoys long walks on the beach and fine wines"
                        image="https://i.imgur.com/BxjCkO2.jpg"
                    />
                    <DevCard
                    name="Dennis"
                        bio="Dennis enjoys long walks on the beach and fine wines"
                        image="https://i.imgur.com/BxjCkO2.jpg"
                    />
                    <DevCard
                    name="Dennis"
                        bio="Dennis enjoys long walks on the beach and fine wines"
                        image="https://i.imgur.com/BxjCkO2.jpg"
                    />
                    </Row>
                    <button onClick={this.pageChange}>Next Page</button>
                    </Container>
                </div>
            )
        }
    }
}

export default Landing;