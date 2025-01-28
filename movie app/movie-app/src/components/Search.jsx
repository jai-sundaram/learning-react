import React from 'react'
//can accept the props here
const Search = (props) => {
    //props SHOULD NOT BE CHANGED BY THE CHILD COMPONENT
    return (
        //for now, just making sure it appears
        //can get specific components of the props s
        <div className = "text-white">{props.searchTerm}</div>
    )
}
export default Search
