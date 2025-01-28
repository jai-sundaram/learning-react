//to quickly set up the App.jsx
//go to plugins (ctrl+alt+s) -> market place -> search for 'react' snippets
//download 'modern reacr snippets' by anurag kanwar
//go back to app.jsx
//type rafce

//like said before, we are using appwrite for theis project
import React from 'react'
//make sure to import any components created
import Search from "./components/Search.jsx";
const App = () => {
    return (
        //starting top down from the header
        //adding a span tag and give it a classname - this corresponds to some css styling attributes in index.css
        <main>
            <div className = "pattern" />
            <div className = "wrapper">
                <header>
                    <img src = "./hero.png" alt = "hero-banner" />
                    <h1>Find <span className = "text-gradient">Movies </span>You'll Enjoy Without the Hassle </h1>
                </header>
                {/* rendering in the search component*/}
                <Search />

            </div>
        </main>
    )
}
export default App
