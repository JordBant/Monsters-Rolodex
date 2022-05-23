import { Component } from "react";
import './search-bar-styles.css';

class SearchBar extends Component{

    render(){
        const { eventHandler: onSearch, className, placeholder } = this.props  
        
        return(
            <input 
            type="search" 
            className =  {`search-box ${ className }`}
            placeholder = { placeholder }
            onChange = { onSearch }
          />
        )
    }
}

export default SearchBar