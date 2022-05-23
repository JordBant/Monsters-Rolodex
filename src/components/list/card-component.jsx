/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";

class Card extends Component{
    render(){
        const { profilePic, userName } = this.props

        return(
            <div className="profileCard">
                <img 
                src= { profilePic } 
                alt= "Image: Profile picture" 
                />
                <h1> { userName } </h1>
            </div>
        )
    }
}

export default Card