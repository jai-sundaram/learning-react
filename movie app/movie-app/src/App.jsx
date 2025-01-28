//to quickly set up the App.jsx
//go to plugins (ctrl+alt+s) -> market place -> search for 'react' snippets
//download 'modern reacr snippets' by anurag kanwar
//go back to app.jsx
//type rafce

//like said before, we are using appwrite for theis project
//make sure to import all things used like the useState
import React, {useState} from 'react'
//make sure to import any components created
import Search from "./components/Search.jsx";
//importing useState from react

const App = () => {
    //creating a state for a search term (searching for a movie)
    const [searchTerm, setSearchTerm] = useState('');
    //ONLY MUTATE THE VALUES OF THE VARIABLES USING THE SETTER FUNCTIONS ABOVE
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
                {/*we are passing in state fields as props*/}
                {/*props are inputs we pass into a component, like parameter we pass into a function*/}
                {/* as a user searches for something, we can pass that search term into search */}
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

            </div>
        </main>
    )
}
export default App
