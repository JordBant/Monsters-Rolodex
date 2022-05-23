import { Component } from "react";
// import Card from './card-component'

class List extends Component {

    render(){
        const { monsters } = this.props

        return(
            <div>
            {
                monsters.map(monster => {
                    return <h1 key = {monster.id}> {monster.name} </h1>})
                }
            </div>
        )}
    }

export default List