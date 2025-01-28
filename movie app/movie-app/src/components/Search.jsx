import React from 'react'
//can accept the props here
//can get specific components of the props
//for example: props.searchTerm
//can instead destructure the props
const Search = ({searchTerm, setSearchTerm}) => {
    //props SHOULD NOT BE CHANGED BY THE CHILD COMPONENT
    return (
        <div className="search">

            {/*search bar icon
                    */}
            <div>
                <img src="search.svg" alt="search"/>
                {/*adding a textbox*/}
                {/*the value is the just the value entered */}

                {/*
                    onChange handler
                    dont manually ever change the searchTerm
                    rather the input has a handler for a specific time of event
                    in this case, it is listening for an onChange event which in this case is a key press
                    in the real world, event is just shortened to e
                    */}
                <input
                    type="text"
                    placeholder="search through "
                    value={searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    )
}
export default Search
