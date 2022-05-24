import { Component } from "react";
import Card from "../card/card-component";
import './list-styles.css'

class List extends Component {

    render(){
        const { monsters } = this.props
        
        return(
            <div className= "card-list">
            {
                monsters.map(monster => {
                    return <Card monster = {monster} />
                })
            }
            </div>
        )}
    }

export default List