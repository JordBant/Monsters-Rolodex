/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import './card-styles.css'

class Card extends Component{
    render(){
        const {name, email, monstersID } = this.props

        return(
            <div className="card" key = { monstersID }>
                <img className= "monster-pic" src = {`https://robohash.org/${ name }?set=set2&size=180x180` } alt= "Monster profile picture." />
                <h1 className="monster-name"> { name } </h1>
                <p className="monster-email"> { email } </p>
            </div>
        )
    }
}

export default Card