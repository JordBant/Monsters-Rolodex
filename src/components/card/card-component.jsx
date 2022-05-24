/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component } from "react";
import './card-styles.css'

class Card extends Component{

    render(){
        const {name, id, email } = this.props.monster

        return(
            <div className="card" key = { id }>
                <img src = {`https://robohash.org/${ id }?set=set2&size=180x180`} alt= "Monster profile picture." />
                <h1 > { name } </h1>
                <p > { email } </p>
            </div>
        )
    }
}

export default Card