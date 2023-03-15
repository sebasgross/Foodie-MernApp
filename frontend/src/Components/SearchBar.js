import React, { Component } from "react"


class SearchBar extends Component{

render(){
    return(
        <div>
            <input onChange={this.props.getFilter} className="search-bar" type="text" placeholder="Search for your favorite food" />
        </div>
    )
}

}
export default SearchBar